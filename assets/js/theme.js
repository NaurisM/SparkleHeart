(function () {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav');

   burger.addEventListener('click', () => {
      burger.classList.toggle('burger__active'),
         nav.classList.toggle('show');
   });
}());