let btn = document.getElementById('add-button');

function handleClick(event){
    let inputText = document.getElementById("input-text");
    let text = inputText.value;

    let ul = document.querySelector("ul");

    let li = document.createElement('li');
    li.classList.add('li');

    let eliminar = document.createElement('eliminar');
    eliminar.classList.add('eliminar');
    eliminar.textContent = `<input type="button" value="eliminar">`;
    let botonEliminar = eliminar.value;

    li.innerHTML = `${text} ${eliminar} `;
    ul.prepend (li);
    
    
}
    
btn.addEventListener("click",handleClick);
