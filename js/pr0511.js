let texto = document.querySelector('#texto');

let submit = document.querySelector('#enviar');
console.log(submit);
submit.addEventListener('click',text);

let h21= document.querySelector('#h21');

function text(e){
    e.preventDefault();
    h21.textContent=(texto.value.replace(/\d{2}\/\d{2}\/\d{4}/,/\d{2}/));
    
    }