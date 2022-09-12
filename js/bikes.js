const bikes = document.querySelectorAll('.bike-img img')
const gallery = document.querySelector('.bike-img')

bikes.forEach(bike => {
  bike.addEventListener('click', () => {
    const media = matchMedia("(min-width: 935px").matches
    if(media)
      gallery.insertAdjacentElement('afterbegin', bike)
  })
})