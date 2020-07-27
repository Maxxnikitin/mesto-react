import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import PopupProfile from './PopupProfile';
import PopupNewImage from './PopupNewImage';
import PopupNewAvatar from './PopupNewAvatar';
import ImagePopup from './ImagePopup';

function App() {
  const [dataImage, setDataImage] = React.useState({
    link: '',
    name: ''
  });
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(props) {
    setSelectedCard(true);
    setDataImage({link: props.link, name: props.name});
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name={'profile'}
        title={'Редактировать профиль'}
        buttonText={'Сохранить'}
        children={<PopupProfile/>}
        isOpen={isEditProfilePopupOpen}
        close={closeAllPopups}/>
      <PopupWithForm name={'images'}
        title={'Новое место'}
        buttonText={'Создать'}
        children={<PopupNewImage/>}
        isOpen={isAddPlacePopupOpen}
        close={closeAllPopups}/>
      <PopupWithForm name={'avatar'}
        title={'Обновить аватар'}
        buttonText={'Сохранить'}
        children={<PopupNewAvatar/>}
        isOpen={isEditAvatarPopupOpen}
        close={closeAllPopups}/>
      <PopupWithForm name={'del'}
        title={'Вы уверены?'}
        buttonText={'Да'}/>
      <ImagePopup isOpen={selectedCard}
        onClose={closeAllPopups}
        image={dataImage}/>
    </div>
  );
}

export default App;
