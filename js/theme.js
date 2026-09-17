/* ==========================================
   PORTFOLIO WEBSITE
   THEME
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        body.classList.add("dark-mode");

        icon.classList.remove("bi-moon-stars");

        icon.classList.add("bi-sun");

    }

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark-mode");

        const isDark = body.classList.contains("dark-mode");

        if (isDark) {

            icon.classList.remove("bi-moon-stars");
            icon.classList.add("bi-sun");

            localStorage.setItem("theme", "dark");

        } else {

            icon.classList.remove("bi-sun");
            icon.classList.add("bi-moon-stars");

            localStorage.setItem("theme", "light");

        }

    });

});