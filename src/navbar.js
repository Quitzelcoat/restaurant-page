import mainPage from "./createPage";
import menuPage from "./menu";
import contact from "./contact";

const navbar = () => {
    const content = document.getElementById("content");

    const nav = document.createElement("div");
    const homeNav = document.createElement("div");
    const menuNav = document.createElement("div");
    const contactNav = document.createElement("div");

    nav.classList.add("nav");
    homeNav.classList.add("homeNav", 'navBtn');
    menuNav.classList.add("menuNav", 'navBtn');
    contactNav.classList.add("contactNav", 'navBtn');

    homeNav.innerText = "Home";
    menuNav.innerText = "Menu";
    contactNav.innerText = "Contact Us";

    content.appendChild(nav);
    nav.appendChild(homeNav);
    nav.appendChild(menuNav);
    nav.appendChild(contactNav);

    homeNav.addEventListener('click', () => {
        clearTab();
        mainPage();
    });

    menuNav.addEventListener('click', () => {
        clearTab();
        menuPage();
    });

    contactNav.addEventListener('click', () => {
        clearTab();
        contact();
    });
}

function clearTab() {
    const content = document.getElementById("content");
    const allContainer = document.querySelector(".allContainer");
    if(allContainer) {
        content.removeChild(allContainer);
    }

}

export default navbar;