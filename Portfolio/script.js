const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        navigationLinks.classList.toggle("active");

        const menuIsOpen = navigationLinks.classList.contains("active");
        menuButton.setAttribute("aria-expanded", menuIsOpen);
    });
}

navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        navigationLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
    });
});