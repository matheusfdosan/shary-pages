/* Aside open/close System*/
document.querySelector(".aside > button").addEventListener("click", () => {
  document.querySelector(".aside").classList.add("active")
  document.body.style.overflow = "none"
})

document.querySelector("#close-bar").addEventListener("click", () => {
  document.querySelector(".aside").classList.remove("active")
})

/* Close bar button bug */
const mediaQuery = window.matchMedia("(max-width: 720px)")
const closeBar = document.querySelector("#close-bar")
function handleMediaQueryChange(event) {
  if (event.matches) {
    closeBar.style.opacity = "1"
    closeBar.style.pointerEvents = "auto"
  } else {
    closeBar.style.opacity = "0"
    closeBar.style.pointerEvents = "none"
  }
}

mediaQuery.addEventListener("change", handleMediaQueryChange)
handleMediaQueryChange(mediaQuery)