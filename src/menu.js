const menuPage = () => {
    const content = document.getElementById("content");
    
    const allContainer = document.createElement("div");
    const mainDish = document.createElement("h2");
    const dishes = document.createElement("div");
    const pizzaTitle = document.createElement("h3");
    const pizzaDes = document.createElement("p");
    const pizzaPrice = document.createElement("div");
    const pizzaImg = document.createElement("img");

    allContainer.classList.add("allContainer");
    mainDish.classList.add("mainDish");
    dishes.classList.add("dish");
    pizzaTitle.classList.add("pizza")
    pizzaDes.classList.add("pizzaDes");
    pizzaPrice.classList.add("pizzaPrice");

    mainDish.innerText = "Main Dishes";
    pizzaTitle.innerText = "Pizza";
    pizzaDes.innerText = "An Italian origin dish consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."
    pizzaPrice.innerHTML = "$ 10";
    
    pizzaImg.src = "../images/pizza.jpg";
    pizzaImg.height = "300";
    pizzaImg.width = '300';

    content.appendChild(allContainer);
    allContainer.appendChild(mainDish);
    allContainer.appendChild(dishes);
    dishes.appendChild(pizzaTitle);
    dishes.appendChild(pizzaDes);
    dishes.appendChild(pizzaPrice);
    dishes.appendChild(pizzaImg);
}

export default menuPage;