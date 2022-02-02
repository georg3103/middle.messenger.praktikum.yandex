export default
`<ul class="chat-list">
    {{#each contentList}}
        <li class="chat-list__item">
            {{ chatItem }}
        </li>
    {{/each}}
</ul>`;
