export default
`<div class="chat-form {{class}}">
    <h1 class="chat-form__title">{{title}}</h1>
    <form action="" class="chat-form__form" onsubmit="chat.form.submit(this);return false;">
        {{content}}
    </form>
    <div class="chat-form__button">{{button}}</div>
    <div class="chat-form__link">{{link}}</div>
</div>`;
