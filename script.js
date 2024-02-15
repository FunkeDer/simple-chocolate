const modal = document.getElementById("backdrop_container");
const openModal = document.getElementById("module_open");
const closeModal = document.getElementById("module_close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.setAttribute("closing", "");

  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
});