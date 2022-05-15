let products = {
    data: [
        // Cattle
      {
        productName: "Ox",
        category: "Cattle",
        price: "30",
        image: "https://images.pexels.com/photos/7081462/pexels-photo-7081462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Calf",
        category: "Cattle",
        price: "49",
        image: "https://images.pexels.com/photos/34531/calf-brown-reddish-small.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Cow",
        category: "Cattle",
        price: "99",
        image: "https://images.pexels.com/photos/2647053/pexels-photo-2647053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
        // Canine
      {
        productName: "Mastiff",
        category: "Canine",
        price: "29",
        image: "https://images.pexels.com/photos/5029647/pexels-photo-5029647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Chihuahua",
        category: "Canine",
        price: "129",
        image: "https://images.pexels.com/photos/11916780/pexels-photo-11916780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Shiba",
        category: "Canine",
        price: "89",
        image: "https://images.pexels.com/photos/2187304/pexels-photo-2187304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Dalmation",
        category: "Canine",
        price: "189",
        image: "https://images.pexels.com/photos/11444582/pexels-photo-11444582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    //   Cat
      {
        productName: "Cat John",
        category: "Cat",
        price: "49",
        image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Cat Sarah",
        category: "Cat",
        price: "49",
        image: "https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        productName: "Cat Tommy",
        category: "Cat",
        price: "49",
        image: "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  };


  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };