let p = document.getElementsByTagName('p');
let parrafos = document.getElementById('parrafos');

let enlaces = document.getElementsByTagName('a');
let penultimoenlace = document.getElementById('segundo-enlace');

let google = 0;
let linksgoogle = document.getElementById('links-google-es');

let palabrassegundoparrafo = document.getElementById('palabras-segundo-parrafo');

for (let number=0; number<enlaces.length; number++){
    if (enlaces[number].href=="https://www.google.es/"){
        google++;
    }
}

let p2 = p[1]; 
p2 = (p2.textContent.trim().split(' '));



//numeros de parrafos
parrafos.innerHTML = p.length;
//página a la que enlaza del segundo enlace
let index = enlaces.length-2;
penultimoenlace.innerHTML = (enlaces[index].href);
//cuantos enlaces redirigen a https://google.es/
linksgoogle.innerHTML = google;
//cuantas palabras hay en el segundo parrafo
palabrassegundoparrafo.innerHTML = p2.length;
