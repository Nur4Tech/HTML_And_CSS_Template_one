/////////// toggle Menu Start ///////////


let toggleMenu = document.querySelector(".toggle");

let toggleLink = document.querySelector(".links");

toggleMenu.onclick = function (e) {

    e.stopPropagation();

    this.classList.toggle("open");
    this.classList.toggle("active");
};

// click anywhere to close menu

document.addEventListener("click", (e) => {
    if (e.target !== toggleMenu && e.target !== toggleLink) {


        if (toggleMenu.classList.contains("open")) {

            toggleMenu.classList.toggle("open");
            toggleMenu.classList.toggle("active");

        }

    }
});

toggleLink.onclick = function (e) {

    e.stopPropagation();
};

/////////// toggle Menu End ///////////