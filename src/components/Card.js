import React from 'react';

function Card(props) {

  const {card, onCardClick} = props;

  function handleClick() {
    onCardClick(card);    
  }  
  
  return (  

    <article className="card">
      <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
      <button className="card__delete" type="button"></button>
      <div className="card__heading">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </article>
    
  )
}

export default Card;