(function () {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.nav');
   const body = document.querySelector('body');

   burger.addEventListener('click', () => {
      body.classList.toggle('fixed'),
      burger.classList.toggle('burger__active'),
         nav.classList.toggle('show');
   });
}());
