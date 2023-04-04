var inputCfa = document.getElementById('idCfa');
var inputDollar = document.getElementById('idDollar');
var inputEuro = document.getElementById('idEuro');
var spanCfa = document.getElementById('erreurCfa');
var spanDollar = document.getElementById('erreurDollar');
var spanEuro = document.getElementById('erreurEuro');
var Cfa = 0;
var Euro = 0;
var Dollar = 0;

function convertCfa() {
    if (verifMontant(inputCfa.value)) {
        inputDollar.value = Math.round(inputCfa.value / 500);
        inputEuro.value = Math.round(inputCfa.value / 655);
        inputDollar.removeAttribute('disabled');
        inputEuro.removeAttribute('disabled');
        spanCfa.innerText = "";
        Cfa = 1;
        Dollar = 1;
        Euro = 1;
    } else{
        spanCfa.innerText = 'Le montant en Cfa est incorrect';
        spanCfa.style.color = 'red';
        inputDollar.setAttribute('disabled','disabled');
        inputEuro.setAttribute('disabled','disabled');
        inputEuro.value = "";
        inputDollar.value = "";
    }
}


function convertEuro() {
    if (!verifMontant(inputEuro.value)) {
        spanEuro.innerText = 'Le montant en Euro est invalide';
        spanEuro.style.color = 'red';
        inputCfa.value = '';
        inputDollar.value = '';
        inputDollar.setAttribute('disabled','disabled');
        inputCfa.setAttribute('disabled','disabled');
        Cfa = 1;
        Dollar = 1;
        Euro = 1;
    } else{
        // inputCfa.setAttribute("value",inputEuro.value * 655);
        // inputDollar.setAttribute("value",inputEuro.value * 1.13);
        inputCfa.value = inputEuro.value *  655;
        inputDollar.value = inputEuro.value * 1.13;
        inputDollar.removeAttribute("disabled")
        inputCfa.removeAttribute("disabled")
        spanEuro.innerText = "";
    }
}

function convertDollar() {
    if (!verifMontant(inputDollar.value)) {
        spanDollar.innerText = 'Le montant en Dollar est invalide';
        spanDollar.style.color = 'red';
        inputCfa.value = '';
        inputEuro.value = '';
        inputEuro.setAttribute('disabled','disabled');
        inputCfa.setAttribute('disabled','disabled');
        Cfa = 1;
        Dollar = 1;
        Euro = 1;
    } else{
        // inputCfa.setAttribute("value",inputEuro.value * 655);
        // inputDollar.setAttribute("value",inputEuro.value * 1.13);
        inputCfa.value = inputDollar.value /  550;
        inputEuro.value = inputDollar.value / 1.13;
        inputEuro.removeAttribute("disabled")
        inputCfa.removeAttribute("disabled")
        spanDollar.innerText = "";
    }
}

function verifMontant(montant){
    return (!isNaN(montant) && montant > 0) ? true : false;
}

var btn = document.getElementById('convert');
btn.removeAttribute('disabled');
var span = document.createElement('span');
var contenu = document.getElementById('contenu');
btn.onclick = function(){
    if(Cfa == 1 && Dollar == 1 && Euro == 1){
        span.innerText = inputCfa.value+" Fcfa = "+inputDollar.value+" $ = "+inputEuro.value+" €";
        span.style.color = "blue";
    }else{
        span.innerText = "Tous les champs doivent etre corrects !";
        span.style.color = "red";

    }
    contenu.appendChild(span);
}
