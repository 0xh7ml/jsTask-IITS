// get the values 
let rootValue = document.getElementById('root');
let addValue = document.getElementById('add');
let subValue = document.getElementById('sub');
let num = 0;

// creating a function to increase or decrease the value if event happen
function inc(){
    num += 1;
    rootValue.textContent = num;
}
function dec(){
    if(num > 0 ){
        num -= 1;
        rootValue.textContent = num;
    }
    else{
        alert("Less than 0!!!")
    }
}