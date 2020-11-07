import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

  const [userName,setUserName] = React.useState('');
  const [userDescription,setUserDescription] = React.useState('');  
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);
 
  React.useEffect(() => {
    api.getAllData()
      .then((allData) => {
        const [profile, initialCards] = allData;
        
        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);

        setCards(initialCards);
        
      })
  },[])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="аватар" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">

      {
        cards.map((card, i) => (
          <Card 
            card={card}
            onCardClick={props.onCardClick}
          />
        ))
      }
      
      </section>

    </main>
  )

}

export default Main;