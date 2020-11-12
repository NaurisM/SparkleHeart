

// new Glide('.glide').mount()

// new Glide('.glide', {
//   type: 'slider'
// }).mount()

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide', {
    type   : 'loop',
    pagination: false
  }).mount();
});