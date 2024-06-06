/* Aside open/close System*/
document.querySelector("aside > button").addEventListener("click", () => {
  document.querySelector("aside").classList.add("aside-active")
})

document.querySelector("#close-bar").addEventListener("click", () => {
  document.querySelector("aside").classList.remove("aside-active")
})

/* Comments Modal open/close System*/
document
  .querySelector("#comments-like > button:nth-child(2)")
  .addEventListener("click", () => {
    document.querySelector(".modal-comments").classList.add("active")
  })

document.querySelector("#close > ion-icon").addEventListener("click", () => {
  document.querySelector(".modal-comments").classList.remove("active")
})

document.querySelector(".modal-comments").addEventListener("click", (e) => {
  if (e.target.classList[0] === "modal-comments") {
    document.querySelector(".modal-comments").classList.remove("active")
  }
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
