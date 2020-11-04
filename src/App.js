import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <body className="page">
  <header className="header">
    <img src="./images/logo-white.svg" alt="Логотип" className="logo" />
  </header>

  <main className="content">
    <section className="profile">
      <div className="profile__avatar">
        <img src="#" alt="аватар" className="profile__image" />
      </div>
      <div className="profile__info">
        <div className="profile__container">
          <h1 className="profile__name"></h1>
          <button type="button" className="profile__edit-button"></button>
        </div>
        <p className="profile__about"></p>
      </div>

      <button type="button" className="profile__add-button"></button>
    </section>

    <section className="cards">

    </section>
  </main>

  <section className="popup popup_type_user">
    <form action="post" name="popup__container" className="popup__form" novalidate>
      <button type="button" className="popup__close"></button>
      <h2 className="popup__title">Редактировать профиль</h2>
      <label className="popup__field">
        <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name" required minlength="2" maxlength="40" />
        <span className="popup__error" id="name-input-error"></span>
      </label>
      <label className="popup__field">
        <input className="popup__input popup__input_type_about" id="about-input" type="text" name="about" required minlength="2" maxlength="200" />
        <span className="popup__error" id="about-input-error"></span>
      </label>
      <button className="popup__button">Сохранить</button>
    </form>
  </section>

  <section className="popup popup_type_card">
    <form action="post" name="popup__container" className="popup__form" novalidate>
      <button type="button" className="popup__close"></button>
      <h2 className="popup__title">Новое место</h2>
      <label className="popup__field">
        <input className="popup__input popup__input_type_place" id="place-input" type="text" name="place" placeholder="Название" required minlength="1" minlength="30" />
        <span className="popup__error" id="place-input-error"></span>
      </label>
      <label className="popup__field">
        <input className="popup__input popup__input_type_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-input-error"></span>
      </label>
      <button className="popup__button">Сохранить</button>
    </form>
  </section>

  <section className="popup popup_type_image">
    <figure className="popup__image-box">
      <button type="button" className="popup__close"></button>
      <img className="popup__image" src="#" alt="" />
      <figcaption className="popup__caption"></figcaption>
    </figure>
  </section>

  <section className="popup popup_type_avatar">
    <form action="post" name="popup__container" className="popup__form" novalidate>
      <button type="button" className="popup__close"></button>
      <h2 className="popup__title">Обновить аватар</h2>
      <label className="popup__field">
        <input className="popup__input popup__input_type_place" id="place-input" type="url" name="avatar" placeholder="Ссылка" required minlength="1" minlength="30" />
        <span className="popup__error" id="place-input-error"></span>
      </label>
      <button className="popup__button">Сохранить</button>
    </form>
  </section>

  <section className="popup popup_type_confirm">
    <form action="post" name="popup__container" className="popup__form" novalidate>
      <button type="button" className="popup__close"></button>
      <h2 className="popup__title">Вы уверены?</h2>
      <button className="popup__button">Да</button>
    </form>
  </section>

  <footer className="footer">
    <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
  </footer>

  <template id="card-template">
    <article className="card">
      <img src="#" alt="" className="card__image" />
      <button className="card__delete" type="button"></button>
      <div className="card__heading">
        <h2 className="card__title"></h2>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <p className="card__like-count"></p>
        </div>
      </div>
    </article>
  </template>


</body>

  );
}

export default App;
