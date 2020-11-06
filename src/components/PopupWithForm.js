function PopupWithForm(props) { //title, name
  return (

    <section className={`popup popup_type_${props.name}`} >

    <form action="post" name="popup__container" className="popup__form" novalidate>
      <button type="button" className="popup__close"></button>
      <h2 className="popup__title">{props.title}</h2>
      
      {props.children}

    </form>
  </section>
  
  )
}

export default PopupWithForm;