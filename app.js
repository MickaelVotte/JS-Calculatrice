const afficheCalcul = document.getElementById('calcule');
const afficheResult = document.getElementById('result');
const btn = document.querySelectorAll("button");



let value1 = "";
let value2 = "";
let operateur = "";
let result;



function chiffre(n) {

    if (operateur === "") {
        value1 += n
        console.log(value1);
    } else if (operateur != "") {
        value2 += n
        console.log(value2);
    }

    afficheCalcul.innerHTML += n
}

function operator(op) {
    
    operateur = op
   afficheCalcul.innerHTML = op

    console.log(op);
}


function calcul() {
    switch (operateur) {
        case '+':
            result = parseFloat(value1) + parseFloat(value2)
            console.log(result);
            break;
        case '-':
            result = parseFloat(value1) - parseFloat(value2)
            console.log(result);
            break;
        case '*':
            result = parseFloat(value1) * parseFloat(value2)
            console.log(result);
            break;
        case '/':
            result = parseFloat(value1) * parseFloat(value2)
            console.log(result);
            break;
    }
    afficheResult.innerHTML = result

}


function reset() {
    value1 = "";
    value2 = "";
    operateur = "";
    afficheCalcul.innerHTML ="";
    afficheResult.innerHTML = "";
}