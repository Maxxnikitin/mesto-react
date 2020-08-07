import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  //Подписываемся на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // Показываем или нет кнопку удаления
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
    `button ${isOwn ? 'button_del' : 'button_del button_del-invisible'}`
  );

  // Регулируем активность кнопки лайк
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `button ${isLiked ? 'button_like button_like-active' : 'button_like'}`
  );

  function handleClick() {
    props.onCardCick(props.card)
  }
  function handleLikeClick() {
    props.onCardLike(props.card)
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }

  return (
    <article className="photo" key={props.card._id} id={props.card._id}>
      <img className="photo__image"
        src={props.card.link}
        alt={props.card.name}
        data-name=""
        onClick={handleClick} />
      <div className="photo__title">
        <h2 className="photo__name">{props.card.name}</h2>
        <div className="photo__like">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" />
          <p className="photo__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" />
    </article>
  );
}

export default Card;
