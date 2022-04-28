const navToggle = document.querySelector(".nav-toggle");
        const navMenu = document.querySelector(".nav-menu");
        const navMenuItem = document.querySelectorAll(".nav-menu-link");


        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("nav-menu_visible");

            if (navMenu.classList.contains("nav-menu_visible")) {
                navToggle.setAttribute("aria-label", "Cerrar menú");
                document.body.style.overflowY = "hidden";
            } else {
                navToggle.setAttribute("aria-label", "Abrir menú");
                document.body.style.overflowY = "scroll";
            }
        });

        navMenuItem.forEach((item) => {
            item.addEventListener("click", () => {
                navMenu.classList.toggle("nav-menu_visible");
                if (navMenu.classList.contains("nav-menu_visible")) {
                    navToggle.setAttribute("aria-label", "Cerrar menú");

                } else {
                    navToggle.setAttribute("aria-label", "Abrir menú");
                    document.body.style.overflowY = "scroll";
                }
            })
        })

        const btnScrollToTop = document.querySelector("#btnScrollToTop");

        btnScrollToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        });