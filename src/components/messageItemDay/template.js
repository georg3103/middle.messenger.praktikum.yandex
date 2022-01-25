export default
`<li class="message-item-day message-item-day--{{type}}">
    <div class="message-item-day__wrapper">
    {{#if isDataTime }}
        <time class="message-item-day__date-time">{{time}}</time>
    {{else}}
        <p class="message-item-day__text">
            {{message}}
            <time class="message-item-day__time">{{time}}</time>
        </p>
    {{/if}}
    </div>
</li>`;
