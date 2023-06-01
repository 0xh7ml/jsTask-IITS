let n = 5;
let myString = "";
// external loop
for(let i=1; i<n+1; i++){
    for(let j=1; j<i+1; j++){
        myString += j;
    }
    myString += "\n";
}
console.log(myString);