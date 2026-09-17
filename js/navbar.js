/* ==========================================
   PORTFOLIO WEBSITE
   NAVBAR
   Version : 1.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-link");
    const indicator = document.querySelector(".navbar-indicator");

    if (!header || !indicator || sections.length === 0) return;

    /* ======================================
       GLASS NAVBAR
    ====================================== */

    function handleNavbar() {

        if (window.scrollY > 20) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    /* ======================================
       ACTIVE INDICATOR
    ====================================== */

    function moveIndicator(link) {

        indicator.style.width = `${link.offsetWidth}px`;
        indicator.style.left = `${link.offsetLeft}px`;

    }

    /* ======================================
       ACTIVE MENU
    ====================================== */

    function updateActiveMenu() {

        let currentSection = "";

        const scrollPosition =
            window.scrollY + window.innerHeight * 0.35;

        sections.forEach(section => {

            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (
                scrollPosition >= top &&
                scrollPosition < bottom
            ) {

                currentSection = section.id;

            }

        });

        /* ==========================
           CONTACT FIX
        ========================== */

        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 5
        ) {

            currentSection = sections[sections.length - 1].id;

        }

        navLinks.forEach(link => {

            const target = link.getAttribute("href").replace("#", "");

            if (target === currentSection) {

                link.classList.add("active");

                moveIndicator(link);

            } else {

                link.classList.remove("active");

            }

        });

    }

    /* ======================================
       EVENT
    ====================================== */

    window.addEventListener("scroll", () => {

        handleNavbar();

        updateActiveMenu();

    });

    window.addEventListener("resize", updateActiveMenu);

    handleNavbar();

    updateActiveMenu();

});

