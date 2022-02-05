import {v4 as makeUUID} from 'uuid';
import EventBus from './EventBus';

const componentAttr = 'data-component';

const makeComponentContainer = (key) => `<div ${componentAttr}="${key}"></div>`

interface Props {
  components?: Record<string, Block>;
  events?: Record<string, (e: Event) => void>;
};

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  eventBus: EventBus;
  props: Props & Record<string, any>;
  _element: HTMLElement;
  _meta: {
    tagName: string;
    props: Props & Record<string, any>;
  };
  _id: string;

  constructor(tagName: string, props: Props & Record<string, any>) {
    this._meta = {
      tagName,
      props,
    };

    this._id = makeUUID();
    this.props = this._makePropsProxy(props);

    this.eventBus = new EventBus();

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _componentDidUpdate<T>(oldProps: T, newProps: T): void {
    const hasPropsChanged = this.isPropsChanged(oldProps, newProps);
    if (!hasPropsChanged) {
      return;
    }

    this._render();
  }

  _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(): void {}

  init(): void {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  _render(): void {
    const compileTemplate = this.render();
    const html = compileTemplate(this._preCompileTemplate());
    const element = this._compileDomElement(html);
    this._element.insertAdjacentElement('afterbegin', element);
    this._removeEvents();
    this._addEvents();
  }

  _preCompileTemplate() {
    return Object.entries(this.props)
      .reduce((acc, item) => {
        const [ key, instance ] = item;
        const isBlockArray = Array.isArray(instance) && instance.every(item => item instanceof Block);
        if (instance instanceof Block || isBlockArray) {
          return { ...acc, [key]: makeComponentContainer(key) };
        }
        return { ...acc, [key]: instance };
      }, {});
  }

  _removeEvents(): void {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]) ;
    });
  }

  _addEvents(): void {
    const { events = {} } = this.props;
    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  _compileDomElement(tmpl: string): HTMLElement {
    const { body } = new DOMParser().parseFromString(tmpl, 'text/html');
    const element = body?.children[0] as HTMLElement;

    if (this.props && !!element) {
      Object.entries(this.props)
        .forEach((item) => {
          const [ key, instance ] = item;
          const subComponents = element.querySelectorAll(`[data-component="${key}"]`);
          const subComponentsParent = subComponents[0]?.parentElement;

          if (subComponents.length === 0) {
            return element;
          }

          if (Array.isArray(instance)) {
            instance.forEach((instanceEl: Block) => subComponents.forEach(subComponent => {
              subComponent.insertAdjacentElement('beforebegin', instanceEl.getContent())
            }
            ));
          } else {
            subComponents.forEach(subComponent => subComponent.insertAdjacentElement('beforebegin', instance.getContent()))
          }

          subComponents.forEach(subComponent => subComponentsParent.removeChild(subComponent));
      })
    }
    return element;
  }

  get element(): HTMLElement {
    return this._element;
  }

  getContent(): HTMLElement {
    return this.element;
  }

  render(): Function {
    return () => {};
  }

  isPropsChanged<T>(oldProps: T, newProps: T): boolean {
    // TODO: add shallow equal
    return true;
  }

  setProps(nextProps: Props): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  _makePropsProxy(props: Props): Props {
    const self = this;
    const oldProps: Props = JSON.parse(JSON.stringify(props));

    return new Proxy(props, {
      get(target: Props, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Props, prop: string, value): boolean {
        target[prop] = value;
        self._componentDidUpdate(oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    })
  }

  show(): void {
    this.getContent().style.display = 'block';
  }

  hide(): void {
    this.getContent().style.display = 'none';
  }
}