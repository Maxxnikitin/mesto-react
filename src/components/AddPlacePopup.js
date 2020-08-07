import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  //Используем реф
  const inputNameRef = React.useRef();
  const inputLinkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdatePlace({
      name: inputNameRef.current.value,
      link: inputLinkRef.current.value
    });
}
  return (
    <PopupWithForm name={'images'}
      title={'Новое место'}
      buttonText={'Создать'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        ref={inputNameRef}
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
        ref={inputLinkRef}
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
    </PopupWithForm>
  )
}

export default AddPlacePopup;
