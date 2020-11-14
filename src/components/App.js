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
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  React.useEffect(() => {
    api.getAllData()
      .then((allData) => {
        const [profile, initialCards] = allData;
        
        setCards(initialCards);
        setCurrentUser(profile)

      })
      .catch((err) => console.log(err));
  },[])
  
  //данные пользователя
  function handleUpdateUser(data) {
    api.saveProfile(data)
      .then((profile) => {
        setCurrentUser(profile);
      })
      .finally(() => {
        //popupUserInfo.waitServer(false);
        closeAllPopups();
      });
  }
  
  function handleUpdateAvatar(data){
    api.changePhoto(data)
      .then((profile) => {
        setCurrentUser(profile);
    })
    .finally(() => {
      //popupUserAvatar.waitServer(false);
      closeAllPopups();
    });
  }

  //карточки
  
  /* лайк карточки */
  function handleCardLike(card) {
    
    const isLiked = card.likes.some(like => like._id === currentUser._id);
  
    api.changeLikeCardStatus(card, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  } 

  /* удаление карточки */
  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        const newCards = cards.filter((item) => {        
          return item._id !== card._id;
        });
        setCards(newCards);
      })
  }

  function handleAddPlaceSubmit(card){
    
    api.addCard(card)
      .then((data) => {
        setCards([data, ...cards]);
      })
      .finally(() => {
        //popupAddCard.waitServer(false);
        closeAllPopups();
      });
  }

  return (

    <CurrentUserContext.Provider value={currentUser}>
    <body className="page">
 
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick} 
        onAddPlace ={handleAddPlaceClick} 
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike ={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar}
      />

      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddPlaceSubmit}
      />

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
