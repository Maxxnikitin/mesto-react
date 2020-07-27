import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardCick(props.card)
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
          <button className="button button_like" type="button" />
          <p className="photo__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button className="button button_del" type="button" />
    </article>
  );
}

export default Card;
