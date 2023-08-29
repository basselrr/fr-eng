//data translation start
const translations = {
    en: {
        home: 'Home',
        contact: 'Contact',
        contact: 'Contact Us',
        pricing: 'Pricing',
        disabled: 'Disabled',
        welcome: 'Welcome to Cyrameart webpage',
        new: 'New',
        c_title: 'Card title',
        c_text: 'Some quick example text to build on the card title and make up the bulk of the card',

        c_btn: 'Go somewhere',
        first_r: 'First radio',
        second_r: 'Second radio',
        third_r: 'Third disabled radio',
        checkbox: 'Example checkbox'

    },
    fr: {
        home: 'Accuiel',
        contact: 'Contact',
        contact: 'Contact',
        pricing: 'Tarification',
        disabled: 'Désactivée',
        welcome: 'Bienvenue sur le site de Cyrameart ',
        new: 'nouvelle',
        c_title: 'Titre de la carte',
        c_text: 'Quelques exemples de texte rapides à construire sur le titre de la carte et constituant l',


        c_btn: 'Aller quelque part',
        first_r: 'Première radio',
        second_r: 'deuxièm radio',
        third_r: 'troisième Désactivée radio',
        checkbox: 'Exemple de case à cocher'
       

    }
} 
//data translation end

//data translation end

const languageSelector = document.querySelector("select");

languageSelector.addEventListener("click", (event) => {
  setLanguage(event.target.value);

localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en"; 
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[dat-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("dat-i18n");
    element.textContent = translations[language][translationKey];
  });
  
};

// show hide language
const langEl = document.querySelector('.langwrap')

  langEl.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      langEl.querySelector('.hide').classList.remove('hide');
      el.classList.add('active');
      el.classList.add('hide');
    })
    

  


    $(document).ready(function(){
      $("h5").mousedown(function(){
        alert("Mouse down over p1!");
      });
    });