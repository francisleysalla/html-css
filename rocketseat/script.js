function toggle() {
  const html = document.documentElement;
  const img = document.querySelector("img#foto");

  html.classList.toggle("light");
  if (html.classList.value.includes('light')) {
    img.setAttribute("src","./assets/avatar-light.png");
  } else {
    img.setAttribute("src","./assets/avatar.png");
  }
}
