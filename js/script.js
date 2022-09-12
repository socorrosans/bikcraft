const links = document.querySelectorAll(".header-menu li a")

function linkActive(link){
  const url = location.href
  const hrefLink = link.href
  if(url.includes(hrefLink))
    link.classList.add('active')
} 

links.forEach(linkActive)

if(window.SimpleAnime){
  new SimpleAnime();
}