function ImagePopup(props) {
    
  return (
    
    <section className={`popup popup_type_image ${props.card &&  'popup_opened'}`} >
      <figure className="popup__image-box">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;