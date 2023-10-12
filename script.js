// Dom inputs 
let input_pkr = document.getElementById("inputpkr");
let input_dollar = document.getElementById("inputdollar");


// variables 
let pkr;
let dollar;
let solution;


// pkr to dollar function 
function funcpkr(){

pkr = input_pkr.value;
console.log(pkr)
solution = ( pkr/300);
solution = solution.toFixed(2);
input_dollar.value = solution;

}



// dollar to pkr function 

function funcdollar(){
    dollar = input_dollar.value;
    solution = dollar * 300;
    input_pkr.value = solution;
}





// function execution on input event 
input_pkr.addEventListener("input" , funcpkr);
input_dollar.addEventListener("input" , funcdollar);