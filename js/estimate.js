const params = new URLSearchParams(location.search)

params.forEach(param => {
  const element = document.getElementById(param)
  if(element)
    element.checked = true;
})
