import React from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main(props) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={currentUser.avatar} alt="аватар." />
        <div className="profile__ava-change" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="button button_edit" type="button" onClick={props.onEditProfile} />
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="button button_add" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="photos content__photos">
        {props.cards.map((card) => (
          <Card key={card._id} card={card} onCardCick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
        ))}
      </section>
    </main>
  )
}

export default Main;
