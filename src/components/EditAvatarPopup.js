import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {
  //Используем Реф
  const avatarRef = React.useRef();
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    avatarRef.current.value = currentUser.avatar;
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }
  return (
    <PopupWithForm name={'avatar'}
      title={'Обновить аватар'}
      buttonText={'Сохранить'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <input
        ref={avatarRef}
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
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
