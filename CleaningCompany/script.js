const menuButton = document.querySelector(".menu-button");
const navigationLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");
const quoteForm = document.querySelector(".quote-form");
const formMessage = document.querySelector(".form-message");
const faqQuestions = document.querySelectorAll(".faq-question");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navigationLinks) {
    menuButton.addEventListener("click", () => {
        navigationLinks.classList.toggle("active");

        const menuIsOpen =
            navigationLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            menuIsOpen.toString()
        );
    });
}

navigationItems.forEach((link) => {
    link.addEventListener("click", () => {
        if (navigationLinks) {
            navigationLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
});

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.closest(".faq-item");

        if (!faqItem) {
            return;
        }

        const isOpen = faqItem.classList.contains("active");

        document
            .querySelectorAll(".faq-item")
            .forEach((item) => {
                item.classList.remove("active");

                const itemQuestion =
                    item.querySelector(".faq-question");

                if (itemQuestion) {
                    itemQuestion.setAttribute(
                        "aria-expanded",
                        "false"
                    );
                }
            });

        if (!isOpen) {
            faqItem.classList.add("active");

            question.setAttribute(
                "aria-expanded",
                "true"
            );
        }
    });
});

if (quoteForm && formMessage) {
    quoteForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const nameInput =
            quoteForm.querySelector("#name");

        const customerName =
            nameInput?.value.trim() || "there";

        formMessage.textContent =
            `Thank you, ${customerName}! Your quote request has been received.`;

        quoteForm.reset();
    });
}