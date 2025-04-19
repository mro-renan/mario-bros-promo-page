const buttonTrailer = document.querySelector(".buttonTrailer");
const buttonCloseModal = document.querySelector(".closeModal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkVideo = video.src;

function alternateModal() {
  modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
  alternateModal();
  video.setAttribute("src", linkVideo);
});

buttonCloseModal.addEventListener("click", () => {
  alternateModal();
  video.setAttribute("src", "");
});