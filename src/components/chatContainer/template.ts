export default
`<main class="chat-container {{class}}">
    {{#if isEmpty}}
        <p class="chat-container__empty-messages">Выберите чат чтобы отправить сообщение</p>
    {{else}}
        <header class="chat-container__header">
            {{contentHeader}}
        </header>
        <section class="chat-container__content">
            <div class="chat-container__content-inner">
                {{contentMain}}
            </div>
        </section>
        <footer class="chat-container__footer">
            {{contentFooter}}
        </footer>
    {{/if}}
</main>`;
