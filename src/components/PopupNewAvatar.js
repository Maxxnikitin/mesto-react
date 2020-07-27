import React from 'react';

function PopupNewAvatar() {
  return (
    <>
      <input
        className="form__input form__input_link"
        id="avatar-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className="form__input-error form__input-error_place_avatar"
        id="avatar-link-error"
      />
    </>
  );
}

export default PopupNewAvatar;
