export default
`<form class="modal-container {{class}}" onsubmit="return false;">
    <h2 class="modal-container__title">{{title}}</h2>
    {{#if errorTitle}}
        <h2 class="modal-container__title modal-container__title--error" hidden>
            {{errorTitle}}
        </h2>
    {{/if}}
    {{#if contentMain}}
        <div class="modal-container__content">
            {{contentMain}}
        </div>
    {{/if}}
    <div class="modal-container__actions">
        <button type="button" class="button">
            {{btnText}}
        </button>
    </div>
</form>`;
