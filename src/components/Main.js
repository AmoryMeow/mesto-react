function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_user').classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" onClick={handleEditAvatarClick}>
          <img src="#" alt="аватар" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name"></h1>
            <button type="button" className="profile__edit-button" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__about"></p>
        </div>

        <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="cards">

      </section>
  </main>
  )
}

export default Main;