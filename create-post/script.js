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

/* Add the image tag when the image is placed in the input tag */
const fileInput = document.querySelector("#post-file-img")
const fileInfo = document.getElementById("fileInfo")
const preview = document.getElementById("preview")
const addImage = document.querySelector("label[for='post-file-img']")

function formatFileSize(bytes) {
  const units = ["bytes", "KB", "MB", "GB", "TB"]
  let unitIndex = 0

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024
    unitIndex++
  }

  return `${bytes.toFixed(2)} ${units[unitIndex]}`
}

document.querySelector("#post-file-img").addEventListener("change", (e) => {
  const files = event.target.files

  if (files.length > 0) {
    const file = files[0]

    if (file.type.startsWith("image/")) {
      const reader = new FileReader()

      reader.onload = function (e) {
        preview.src = e.target.result
        preview.style.display = "block"
      }

      reader.readAsDataURL(file)

      const formattedSize = formatFileSize(file.size)
      fileInfo.innerHTML = `Arquivo selecionado: ${file.name} (${formattedSize})`
      addImage.style.display = "none"
      document.querySelector("#cancel-post").style.display = "block"
    } else {
      fileInfo.innerHTML = "Por favor, selecione um arquivo de imagem."
      preview.style.display = "none"
    }
  } else {
    fileInfo.innerHTML = "Nenhum arquivo selecionado"
    preview.style.display = "none"
  }
})

document.querySelector("#cancel-post").addEventListener("click", () => {
  fileInfo.innerHTML = ""
  preview.style.display = "none"
  addImage.style.display = "block"
})
