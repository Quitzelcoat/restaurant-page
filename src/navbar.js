import mainPage from "./createPage";
import menuPage from "./menu";
import contact from "./contact";

const navbar = () => {
    const content = document.getElementById("content");

    const homeNav = document.createElement("div");
    const menuNav = document.createElement("div");
    const contactNav = document.createElement("div");

    homeNav.classList.add("homeNav");
    menuNav.classList.add("menuNav");
    contactNav.classList.add("contactNav");

    homeNav.innerText = "Home";
    menuNav.innerText = "Menu";
    contactNav.innerText = "Contact Us";
    
    content.appendChild(homeNav);
    content.appendChild(menuNav);
    content.appendChild(contactNav);

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