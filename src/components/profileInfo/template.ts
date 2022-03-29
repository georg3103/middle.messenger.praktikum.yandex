export default
`<div class="profile-block {{class}}">
    <button type="button" class="profile-block__edit-avatar">
        {{avatar}}
    </button>
    <h2 class="profile-block__name">{{name}}</h2>
    <div class="profile-block__info">
        <ul class="profile-block__list">
            {{#each inputList}}
                <li  class="profile-block__item">
                    <label class="profile-field">
                        <span class="profile-field__name">{{label}}</span>
                        <input type="{{type}}" class="profile-field__input {{class}}" value="{{value}}" disabled="{{disabled}}">
                    </label>
                </li>
            {{/each}}
        </ul>
    </div>
    <div class="profile-actions">
        {{links}}
    </div>
</div>`;
