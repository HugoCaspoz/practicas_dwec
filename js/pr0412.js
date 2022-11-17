let btn = document.getElementById('add-button');
btn.addEventListener("click",handleClick);

function handleClick(event){
    let inputText = document.getElementById("input-text");
    let text = inputText.value;

    let ul = document.querySelector("ul");

    let li = document.createElement('li');
    li.classList.add('li');

    // let eliminar = document.createElement('eliminar');
    // eliminar.classList.add('eliminar');
    // eliminar.textContent = `<input type="button" value="eliminar">`;
    // let botonEliminar = eliminar.value;
    var a = Math.random(0,99);
    li.innerHTML = `${text} <button data-id='${a}'>Eliminar</button> `;
    ul.prepend (li);
    
    let borrar = li.getElementById('a');
    borrar.addEventListener("click", function() {
         li.remove();
        console.log("click");
    })
    
}



    // let eliminar = document.getElementById('eliminar');
    // eliminar
    // let eliminar = document.createElement('eliminar');
    // eliminar.classList.add('eliminar');
    // eliminar.textContent = `<input type="button" value="eliminar">`;
    // let botonEliminar = eliminar.value;

    
    

