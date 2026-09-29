/* =========================================
   VERMKOMPASS
   JavaScript
   ========================================= */


/* =========================================
   DARK / LIGHT MODE
   ========================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeToggle.textContent = "☾";
        } else {
            themeToggle.textContent = "☼";
        }

    });

}


/* =========================================
   SUCHFUNKTION
   ========================================= */

const search = document.getElementById("search");

const cards = [
    ...document.querySelectorAll(".card")
];


if (search) {

    search.addEventListener("input", () => {

        const searchText =
            search.value
                .trim()
                .toLowerCase();


        cards.forEach(card => {

            const searchableText =
                (
                    card.dataset.search +
                    " " +
                    card.textContent
                ).toLowerCase();


            if (
                searchText === "" ||
                searchableText.includes(searchText)
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* =========================================
   NAVIGATION – AKTIVER BEREICH
   ========================================= */

const navigationLinks = [
    ...document.querySelectorAll(".nav-item")
];


const sections = [
    "start",
    "berufsschule",
    "programme",
    "arbeitsablaeufe",
    "begriffe",
    "checklisten"
];


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 150;


    let currentSection = "start";


    sections.forEach(sectionId => {

        const section =
            document.getElementById(sectionId);


        if (
            section &&
            section.offsetTop <= scrollPosition
        ) {

            currentSection = sectionId;

        }

    });


    navigationLinks.forEach(link => {

        const target =
            link.getAttribute("href");


        link.classList.toggle(
            "active",
            target === "#" + currentSection
        );

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =========================================
   KLEINE EINBLENDUNG BEIM LADEN
   ========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
