export default
`
<form>
<div class="profile-block {{class}}">
    <button type="button" class="profile-block__edit-avatar" onclick="modal.openModal('add-file')">
        {{avatar}}
    </button>
    <h2 class="profile-block__name">{{name}}</h2>
    <div class="profile-block__info">
        <ul class="profile-block__list">
            {{#each inputList}}
                <li class="profile-block__item">
                    <label class="profile-field">
                        <span class="profile-field__name">{{label}}</span>
                        <input type="{{type}}" name="{{name}}" class="profile-field__input {{class}}" value="{{value}}">
                    </label>
                </li>
            {{/each}}
        </ul>
    </div>
    <div class="profile-button">
        {{button}}
    </div>
</div>
</form>`;
