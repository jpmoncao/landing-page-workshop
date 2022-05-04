function mostrarOpcoes() {

    (document.getElementById("opcoes")).style.visibility = "visible";

    (document.getElementById("levels")).style.visibility = "hidden";

    (document.getElementById("card")).style.visibility = "hidden";
}

function mostrarLevels() {

    (document.getElementById("opcoes")).style.visibility = "hidden";

    (document.getElementById("levels")).style.visibility = "visible";

    (document.getElementById("card")).style.visibility = "hidden";
}

function mostrarJogoDaVelha() {
    (document.getElementById("jogodavelha")).style.visibility = "visible"

}

function verificarOpcoes() {
    const elementsRadioInput = document.getElementsByName("opcoes");

    for (var i = 0; i < elementsRadioInput.length; i++) {
        if (elementsRadioInput[i].checked) {
            return elementsRadioInput[i].value;
        }
    }
    /*if (elementRadioInput1.checked || elementRadioInput2.checked) {
        (document.getElementsByClassName("btn-opcoes")).disabled = false
    }

    if (elementRadioInput1){}*/
}

function verificarEscolha() {
    const elementRadioInput1 = document.getElementById("radio1");
    const elementRadioInput2 = document.getElementById("radio2");
    const escolha = verificarOpcoes();

    console.log(escolha)
    if (escolha == 1) {
        mostrarLevels()
    }
    else if (escolha == 2) {
        mostrarJogoDaVelha()
    }
}