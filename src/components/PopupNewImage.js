import React from 'react';

function PopupNewImage() {
  return (
    <>
      <input
        className="form__input form__input_name"
        id="name"
        type="text"
        name="name"
        placeholder="Название"
        minLength="1"
        maxLength="30"
        required
        pattern="^[A-Za-zА-ЯЁа-яё\s-]+$"
      />
      <span
        className="form__input-error form__input-error_place_name"
        id="name-error"
      />
      <input
        className="form__input form__input_link"
        id="link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className="form__input-error form__input-error_place_description"
        id="link-error"
      />
    </>
  );
}

export default PopupNewImage;
