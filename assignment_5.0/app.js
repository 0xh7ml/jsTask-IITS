// some change
// getting form input request
const formSubmit = document.getElementById('iits-formSubmit');

// declaring the variables
const countA = document.getElementById('iits-a_count');
const countBPlus = document.getElementById('iits-bp_count');
const countB = document.getElementById('iits-b_count');
const countBMinus = document.getElementById('iits-bm_count');
const countC = document.getElementById('iits-c_count');
const countF = document.getElementById('iits-f_count');

// listening the submit
formSubmit.addEventListener('submit', (event)=>{
    event.preventDefault();
    const inputData = document.getElementById('iits-inp');
    const inputValue = parseInt(inputData.value);
    // filter the value
    if(inputValue < 0 || inputValue > 100){
        // show error
        alert('Enter value between 0 to 100');
    }
    else if(inputValue >= 81 && inputValue <= 100){
        // increase the count of A
        countA.textContent = parseInt(countA.textContent)+1;
    }
    else if(inputValue >= 71  && inputValue <= 80){
        // increase the count of B Plus
        countBPlus.textContent = parseInt(countBPlus.textContent)+1;
    }
    else if(inputValue >= 61 && inputValue <= 70){
        // increase the count of B
        countB.textContent = parseInt(countB.textContent)+1;
    }
    else if(inputValue >= 51 && inputValue <= 60){
        // increase the count of B minus
        countBMinus.textContent = parseInt(countBMinus.textContent)+1;
    }
    else if(inputValue >= 40 && inputValue <= 50){
        // increase the count of C
        countC.textContent = parseInt(countC.textContent)+1;
    }
    else{
        // increase the count of F
        countF.textContent = parseInt(countBMinus.textContent)+1;
    }
    // resetting the form
    formSubmit.reset();
});