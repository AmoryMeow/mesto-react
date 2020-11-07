import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }  
  
  return (  

    <article className="card" key={props.card._id}>
    <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick}/>
    <button className="card__delete" type="button"></button>
    <div className="card__heading">
      <h2 className="card__title">{props.card.name}</h2>
      <div className="card__like-container">
        <button className="card__like" type="button"></button>
        <p className="card__like-count">{props.card.likes.length}</p>
      </div>
    </div>
    </article>
    
  )
}

export default Card;