import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleOnChange(evt) {
  
    if (evt.target.name === 'name') {
      setName(evt.target.value);
    } else if (evt.target.name === 'about') {
      setDescription(evt.target.value);
    } 
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  } 

  return (
    <PopupWithForm 
      name="user" 
      title="Редактировать профиль" 
      submitText="Сохранить" 
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__field">
        <input className="popup__input popup__input_type_name" id="name-input" 
          type="text" name="name" required minLength="2" maxLength="40" 
          value={name} onChange={handleOnChange}
        />
        <span className="popup__error" id="name-input-error"></span>
      </label>
      <label className="popup__field">
        <input className="popup__input popup__input_type_about" id="about-input" 
          type="text" name="about" required minLength="2" maxLength="200" 
          value={description} onChange={handleOnChange}
        />
        <span className="popup__error" id="about-input-error"></span>
      </label>
    </PopupWithForm>

  )
}

export default EditProfilePopup;