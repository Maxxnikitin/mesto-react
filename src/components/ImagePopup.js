import React from 'react';

function ImagePopup(props) {
  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`} id={props.name}>
      <div className="popup__overlay" />
      <figure className="popup__big-image">
        <button
          onClick={props.onClose}
          className="button button_close-big"
          id="button_close-item"
          type="button"
        />
        <img className="big-image" src={props.image.link} alt={props.image.name} />
        <figcaption className="big-image__title">{props.image.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;
