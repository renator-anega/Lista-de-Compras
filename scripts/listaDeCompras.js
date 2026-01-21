import GerarDiaDaSemana from "./gerarDiaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item")
let contador = 0;

export function criarItemDaLista() {
   
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;
    
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    

    const buttonRemove = document.createElement("button");
    buttonRemove.classList.add("item-lista-button");
    buttonRemove.innerHTML = '<img src="./img/delete.svg"alt="Excluir">';

    buttonRemove.addEventListener("click", function() {
        itemDaLista.remove();
        const lista = document.getElementById("lista-de-compras");
    verificarListaVazia(lista); 
});

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    containerItemDaLista.appendChild(buttonRemove); 

    itemDaLista.appendChild(containerItemDaLista);
    
    const dataCompleta = GerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    inputItem.value = "";
    
    return itemDaLista;
}