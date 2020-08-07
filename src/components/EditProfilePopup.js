import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name={'profile'}
      title={'Редактировать профиль'}
      buttonText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        className="form__input form__input_name"
        id="fullname"
        type="text"
        name="name"
        value={name || ''}
        onChange={handleNameChange}
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
        value={description || ''}
        onChange={handleDescriptionChange}
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className="form__input-error form__input-error_place_description"
        id="about-error"
      />
    </PopupWithForm>
  )
}

export default EditProfilePopup;
