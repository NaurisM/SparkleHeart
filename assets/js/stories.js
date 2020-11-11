const openBtn = document.querySelector('#openBtn');
const stories = document.querySelectorAll('.stories-item');
const hideBtn = document.querySelector('.stories-button');

openBtn.addEventListener('click', () => {
  stories.forEach(element => {
    element.classList.remove('hide-stories') 
  }),
  hideBtn.classList.add('hidden')
});

