const mainPage = () => {
    const content = document.getElementById("content");
    
    const allContainer = document.createElement("div");
    const homeContainer = document.createElement("div");
    const heading = document.createElement("h2");
    const paragraph = document.createElement("p");
    const imgDiv = document.createElement("div");
    const img = document.createElement("img");

    allContainer.classList.add("allContainer");
    homeContainer.classList.add("homeContainer");
    heading.classList.add("heading");
    paragraph.classList.add("para");
    imgDiv.classList.add("homeImg");

    img.src = "./images/sushi.jpg";
    img.height = '300';
    img.width = '300';

    heading.innerText = "A Food Place";
    paragraph.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor itaque quam molestiae dignissimos recusandae, omnis blanditiis vitae, eum repellendus illo aperiam, quo excepturi maiores. Lorem ipsum dolor sit amet."

    content.appendChild(allContainer);
    allContainer.appendChild(homeContainer);
    homeContainer.appendChild(heading);
    homeContainer.appendChild(paragraph);
    homeContainer.appendChild(imgDiv);
    imgDiv.appendChild(img);
}

export default mainPage;