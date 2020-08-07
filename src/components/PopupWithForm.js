import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`popup ${props.isOpen && 'popup_opened'}`} id={props.name}>
      <div className="popup__overlay" />
      <form
        className={`form form_place_${props.name}`}
        id={`form-${props.name}`}
        name={props.name}
        method="post"
        action="#"
        onSubmit={props.onSubmit}
      >
        <button
          className="button button_close-item"
          id="button_close-item"
          type="button"
          onClick={props.onClose}
        />
        <fieldset className="form__fieldset">
          <legend className={`form__title form__title_place_${props.name}`}>{props.title}</legend>
          {props.children}
        </fieldset>
        <button onClick={props.onSubmit} type='submit' className='button button_submit'>Сохранить</button>
      </form>
    </section>
  )
}

export default PopupWithForm;
