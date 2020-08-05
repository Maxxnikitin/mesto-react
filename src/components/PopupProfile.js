import React from 'react'

function PopupProfile() {
  return (
    <>
      <input
        className="form__input form__input_name"
        id="fullname"
        type="text"
        name="name"
        minLength="2"
        maxLength="40"
        required
        pattern="^[A-Za-zА-ЯЁа-яё\s-]+$"
      />
      <span
        className="form__input-error form__input-error_place_name"
        id="fullname-error"
      />
      <input
        className="form__input form__input_link"
        id="about"
        type="text"
        name="link"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="form__input-error form__input-error_place_description"
        id="about-error"
      />
    </>
  );
}

export default PopupProfile;
