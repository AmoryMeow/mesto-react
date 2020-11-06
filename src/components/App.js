import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  return (

    <body className="page">
 
      <Header />

      <Main />

      <PopupWithForm name="user" title="Редактировать профиль">
        <label className="popup__field">
          <input className="popup__input popup__input_type_name" id="name-input" type="text" name="name" required minlength="2" maxlength="40" />
          <span className="popup__error" id="name-input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input popup__input_type_about" id="about-input" type="text" name="about" required minlength="2" maxlength="200" />
          <span className="popup__error" id="about-input-error"></span>
        </label>
        <button className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="card" title="Новое место">
        <label className="popup__field">
          <input className="popup__input popup__input_type_place" id="place-input" type="text" name="place" placeholder="Название" required minlength="1" minlength="30" />
          <span className="popup__error" id="place-input-error"></span>
        </label>
        <label className="popup__field">
          <input className="popup__input popup__input_type_link" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="link-input-error"></span>
        </label>
        <button className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар">
        <label className="popup__field">
          <input className="popup__input popup__input_type_place" id="place-input" type="url" name="avatar" placeholder="Ссылка" required minlength="1" minlength="30" />
          <span className="popup__error" id="place-input-error"></span>
        </label>
        <button className="popup__button">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?">
        <button className="popup__button">Да</button>
      </PopupWithForm>
    
      <ImagePopup />
    
      <Footer />

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
