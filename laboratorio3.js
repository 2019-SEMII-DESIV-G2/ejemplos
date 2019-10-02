(function(){
  const App = {
    htmlElements: {
      form: document.querySelector('.laboratorio__form__js'),
      input: document.querySelector('.laboratorio__input__js'),
    },
    init: function(){
      App.bindEvents();
    },
    bindEvents: function(){
      App.htmlElements.form.addEventListener('submit', App.events.onFormSubmit)
    },
    events: {
      onFormSubmit: function(e){
        e.preventDefault();
        const numero = App.htmlElements.input.value;
        alert(numero);
      }
    }
  };
  App.init();
})();