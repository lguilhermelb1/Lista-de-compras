let input = document.getElementById("input");
let button = document.getElementById("adicionar");
let ul = document.getElementById("items");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove");
let aviso = document.getElementById("aviso");

aviso.style.display = 'none';

function criarElemento() {
    if (input.value !== "") {
        aviso.style.display = 'none';

        let li = document.createElement("li");
        let text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);

        let xButton = document.createElement("button");
        xButton.innerHTML = "X";
        xButton.className = "remove";
        li.appendChild(xButton);

        input.value = "";
        buttonEvent();
    } else {
        aviso.style.display = 'block';
    }
}

function removerProduto() {
    this.parentElement.remove();
}

function buttonEvent() {
    for (let i = 0; i < itemButtons.length; i++) {
        itemButtons[i].addEventListener("click", removerProduto);
    }
}

button.addEventListener("click", criarElemento);
buttonEvent();