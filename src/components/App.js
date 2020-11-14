import React from 'react';
import '../App.css';
import api from '../utils/Api.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isEditProfilePopupOpen,setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: '', isOpenCard: false});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
   }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
   }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
   }

  function handleCardClick(card) {
    setSelectedCard({...card, isOpenCard: true});
   }
    
  function closeAllPopups(){
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: '', isOpenCard: false});
   }

  //получение данных пользователя
  React.useEffect(()=> {
    api.getProfile()
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log(err));
  },[])

  
  return (

    <CurrentUserContext.Provider value={currentUser}>
    <body className="page">
 
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />

      <PopupWithForm 
        name="card" 
        title="Новое место" 
        submitText="Сохранить" 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input className="popup__input popup__input_type_place" id="place-input" type="text" name="place" placeholder="Название" required minLength="1" maxLength="30" />
          <span className="popup__error" id="place-input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input popup__input_type_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="link-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="avatar" 
        title="Обновить аватар" 
        submitText="Сохранить" 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__field">
          <input className="popup__input popup__input_type_place" id="place-input" type="url" name="avatar" placeholder="Ссылка" required minLength="1" maxLength="30" />
          <span className="popup__error" id="place-input-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm 
        name="confirm" 
        title="Вы уверены?" 
        submitText="Да"
      />
    
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups}
      />
    
      <Footer />

    </body>
    </CurrentUserContext.Provider>
  );
}

export default App;
