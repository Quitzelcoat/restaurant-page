const mainPage = () => {
    const content = document.getElementById("content");
    
    const allContainer = document.createElement("div");
    const heading = document.createElement("h2");
    const paragraph = document.createElement("p");
    const img = document.createElement("img");

    allContainer.classList.add("allContainer");
    heading.classList.add("heading");
    paragraph.classList.add("para");

    img.src = "./images/sushi.jpg";
    img.height = '300';
    img.width = '300';

    heading.innerText = "A Food Place";
    paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor itaque quam molestiae dignissimos recusandae, omnis blanditiis vitae, eum repellendus illo aperiam, quo excepturi maiores. Lorem ipsum dolor sit amet."

    content.appendChild(allContainer);
    allContainer.appendChild(heading);
    allContainer.appendChild(paragraph);
    allContainer.appendChild(img);
}

export default mainPage;