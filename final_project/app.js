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

adminBtn.addEventListener('click', ()=>{
    const uname = prompt("Enter username");
    const pass = prompt("Enter Password");

    // check username and password
    if(uname === "iits" && pass === "23"){
        // add item will show when admin will access
        adminSection.classList.remove('d-none');
        
        // listening close button click event
        closeBtn.addEventListener('click', ()=>{
            adminSection.classList.toggle('d-none');
        })


    }
    else{
        alert("Wrong credentials!")
    }
});