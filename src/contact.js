const contact = () => {
    const content = document.getElementById("content");

    const allContainer = document.createElement("div");
    const title = document.createElement("h2");

    allContainer.classList.add("allContainer");
    title.classList.add("contactTitle");

    title.innerText = "Contact Us";
    
    content.appendChild(allContainer);
    allContainer.appendChild(title);

}

export default contact;