// Your solution goes here
// API -> https://64b2e33138e74e386d55b072.mockapi.io/api/hanover


// adding developer name
const dev = document.getElementById('iits-developer').innerHTML = "Md Saikat";
const adminSection = document.querySelector("#iits-adminSection");

// hiding admin section for regular user
const hideAdminSection = adminSection.classList.toggle('d-none');

// item adding form close button
const closeBtn = document.getElementById('iits-cancelBtn');

// admin panel function 
// get admin btn
const adminBtn = document.getElementById('iits-adminBtn');

adminBtn.addEventListener('click', () => {
    const uname = prompt("Enter username");
    const pass = prompt("Enter Password");

    // check username and password
    if (uname === "iits" && pass === "23") {
        // add item will show when admin will access
        adminSection.classList.remove('d-none');

        // listening close button click event
        closeBtn.addEventListener('click', () => {
            adminSection.classList.add('d-none');
        });
    }
    else {
        alert("Wrong credentials!")
    }
});

let requestOptions = {
  method: 'GET'
};

fetch("https://64b2e33138e74e386d55b072.mockapi.io/api/hanover", requestOptions)
  .then(response => response.json())
  .then(data => {
    data.forEach(items => {
      showItems(items);
    });
  })
  .catch(error => console.log('error', error));

// new function to show the all items
function showItems(items) {
    const markup = `
    <div class="item col-md-6 col-lg-4 p-3" data-category="${items.type}">
    <div class="card">
      <div class="img-container">
        <img src="${items.url || items.pic }" alt=""/>
        <span class="category-pill">${items.type}</span>
      </div>
      <div class="card-body">
        <h5 class="card-title">${items.name}</h5>
        <p class="card-text">${items.desc}</p>
        <button id="addToCartBtn" class="addToCartBtn btn w-100">Add to cart</button>
      </div>
    </div>
  </div>`;
  document.querySelector('#iits-items').innerHTML += markup;
}


// cart function goes here 



// search variables goes here
const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("iits-searchBox");

// search action goes here
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = searchBox.value.toLowerCase();
  const foodItems = document.querySelectorAll(".item");

  foodItems.forEach((foodItem) => {
    const foodItemName = foodItem.querySelector(".card-title").textContent.toLowerCase();
    const foodItemType = foodItem.querySelector(".category-pill").textContent.toLowerCase();
    if (foodItemName.includes(searchValue) || foodItemType.includes(searchValue)) {
      foodItem.classList.remove("d-none");
    } else {
      foodItem.classList.add("d-none");
    }
  });
});