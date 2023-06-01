let myName = "abcABC";

let length = myName.length;
let lowercaseCount = 0;
let uppercaseCount = 0;

for (let i = 0; i < length; i++) {
    if(myName[i] >= 'a' && myName[i] <= 'z'){
        lowercaseCount++;
    }
    if(myName[i] >= 'A' && myName[i] <= 'Z'){
        uppercaseCount++;
    }
}

console.log('length is', length);
console.log('Total lowercase', lowercaseCount);
console.log('Total uppercase', uppercaseCount);