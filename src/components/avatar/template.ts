export default
`<div class="avatar {{class}}"> 
   {{#if imgSrc}}<img alt="avatar image" class="avatar__img" src="{{imgSrc}}" />
   {{else}}
        <img class="avatar__img" />
   {{/if}}
   {{#if editText}}
        <div class="avatar__edit-text">
            {{editText}}
        </div>
    {{/if}}
</div>`;
