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

const mobileOpenButton = document.getElementById("mobile_open");
const mobileCloseButton = document.getElementById("mobile_close");
const mobileContainer = document.getElementById("mobile_container");
const mobileNavItem = document.getElementById("mobile_nav_item")

// Add event listener to the open button
mobileOpenButton.addEventListener('click', () => {
  mobileContainer.style.cssText = 'display: flex; '; // Show the mobile menu
});

function closeMobileMenu () {
  mobileContainer.style.cssText = 'visibility: hidden; display:none;'; // Show the mobile menu
}

mobileCloseButton.addEventListener('click', closeMobileMenu)

mobileNavItem.addEventListener('click', closeMobileMenu)

