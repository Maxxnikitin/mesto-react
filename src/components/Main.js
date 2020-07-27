import React from 'react';
import api from '../utils/Api.js'
import Card from './Card';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserAvatar(user.avatar);
        setUserName(user.name);
        setUserDescription(user.about);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={userAvatar} alt="аватар." />
        <div className="profile__ava-change" onClick={props.onEditAvatar} />
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button className="button button_edit" type="button" onClick={props.onEditProfile} />
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button className="button button_add" type="button" onClick={props.onAddPlace} />
      </section>
      <section className="photos content__photos">
        {cards && cards.map((card) => (
          <Card key={card._id} card={card} onCardCick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}

export default Main;
