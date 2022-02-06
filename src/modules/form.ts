const validationMapper: Record<string, RegExp> = {
  login: /^(?=[\S]+)(?=.*[^0-9 ].*)[a-zA-Z0-9_-]{3,20}$/,
  name: /^[A-ZА-Я][A-Za-zА-Яа-я\\-]+$/,
  text: /^[a-zA-Zа-яА-я](.[а-яА-яa-zA-Z0-9_-]*)$/i,
  tel: /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
  email: /^[\w-.]+@([a-z]+\.)+[\w-]{2,4}$/g,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
  message: /^(?!\s*$).+/
};

export default class Form {
  public submit(e: Event): void {
    e.preventDefault();
    const targetElement = e.currentTarget as HTMLFormElement; // TODO: fix
    const formElements = targetElement.querySelectorAll('input');
    let isValid = false;

    if (!formElements) {
      return;
    }

    const resultObject = Array.from(formElements)
      .reduce((acc, item) => {
        const attributeName : string | null = item.getAttribute('name');
        if (attributeName) {
          acc[attributeName] = item.value;
          isValid = this.checkInputValidated(item as unknown as HTMLFormElement); // TODO:
          this.toggleErrorClass(item, isValid);
        }

        return acc;
      }, {});

    if (!isValid) {
      return;
    }

    console.log(resultObject);
  }

  public changeInputFile(input: HTMLFormElement): void {
    const filesLength = input.files.length;
    const _parent = input.parentNode;
    if (_parent) {
      const _label: HTMLElement | null = _parent.querySelector('.input-upload-file__label');
      const _name = _parent.querySelector('.input-upload-file__name');
      if (_name && _label) {
        if (filesLength > 0) {
          const fileName = input.files[0].name;
          _label.hidden = true;
          _name.textContent = fileName;
        } else {
          _label.hidden = false;
          _name.textContent = '';
        }
      }
    }
  }

  private checkInputValidated(input:HTMLFormElement): boolean {
    const _type = input.getAttribute('type');
    const _value = input.value;

    if (_type && _value) {
      return new RegExp(validationMapper[_type]).test(_value);
    }

    return false;
  }

  private toggleErrorClass(input: HTMLElement, flag: boolean) :void {
    if (flag) {
      const _parent = input.parentNode;
      if (_parent) {
        (_parent as HTMLElement).classList.remove('error');
      }
    } else {
      const _parent = (input as HTMLFormElement).parentNode;
      if (_parent) {
        (_parent as HTMLElement).classList.add('error');
      }
    }
  }

  public inputEventHandler(event:Event):void {
    event.preventDefault();
    if (this.checkInputValidated((event.target as HTMLFormElement))) {
      this.toggleErrorClass(event.target as HTMLFormElement, true);
    } else {
      this.toggleErrorClass(event.target as HTMLFormElement, false);
    }
  }
}