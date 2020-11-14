import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';
import {CurrentUserContext} from '../contexts/CurrentUserContext.js';

function Main(props) {

  // const [userName,setUserName] = React.useState('');
  // const [userDescription,setUserDescription] = React.useState('');  
  // const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
 
  const currentUser = React.useContext(CurrentUserContext);
    
  React.useEffect(() => {
    api.getAllData()
      .then((allData) => {
        const [profile, initialCards] = allData;
        
        // setUserName(profile.name);
        // setUserDescription(profile.about);
        // setUserAvatar(profile.avatar);

        setCards(initialCards);
        
      })
      .catch((err) => console.log(err));
  },[])

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
          return item._id != card._id;
        });
        setCards(newCards);
      })
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={currentUser.avatar} alt="аватар" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">

      {
        cards.map((card, i) => (
          <Card 
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))
      }
      
      </section>

    </main>
  )

}

export default Main;