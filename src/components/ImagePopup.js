function ImagePopup() {
  return (
    <section className="popup popup_type_image">
      <figure className="popup__image-box">
        <button type="button" className="popup__close"></button>
        <img className="popup__image" src="#" alt="" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup;