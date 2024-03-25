const mainContent = document.getElementById("mainContent")
const homeLink = document.getElementById("homeLink")
const hobbyLink = document.getElementById("hobbyLink")
const videoLink = document.getElementById("videoLink")

mainContent.innerHTML = loadContent("home/index.html")

homeLink.addEventListener("click", function (event) {
  event.preventDefault()
  loadContent("home/index.html")
})

hobbyLink.addEventListener("click", function (event) {
  event.preventDefault()
  loadContent("hobby/index.html")
})

videoLink.addEventListener("click", function (event) {
  event.preventDefault()
  loadContent("video/index.html")
})

function loadContent(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.text()
    })
    .then((html) => {
      mainContent.innerHTML = html
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      )
    })
}
