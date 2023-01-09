let ej1 = document.querySelector('#ej1');
ej1.addEventListener('input',fecha);
let h21 = document.querySelector('#h21');

function fecha(){
if (/^\d{2}\/\d{2}\/\d{4}$/.test(ej1.value)==true){
    h21.textContent="La fecha es correcta";
}else{
    h21.textContent="La fecha es incorrecta";
}

}
// /^\d{2}\/\d{2}\/\d{4}$/.test("12/11/2745");

let ej2 = document.querySelector('#ej2');
ej2.addEventListener('input',telefono);
let h22 = document.querySelector('#h22');

function telefono(){
    if (/^\(\+\d{2}\)\s\d{3}\s\d{6}$/.test(ej2.value)==true){
        h22.textContent="El telefono es correcto";
    }else{
        h22.textContent="El telefono es incorrecto";
    }
    
    }
// /^\(\+\d{2}\)\s\d{3}\s\d{6}$/.test("(+34) 123 123123")h2.innerHTML=;

let ej3 = document.querySelector('#ej3');
ej3.addEventListener('input',correo);
let h23 = document.querySelector('#h23');

function correo (){
    if (/\w\@\w{1,}\.\w/.test(ej3.value)==true){
        h23.textContent=("El correo es correcto");
    }else{
        h23.textContent=("El correo es incorrecto");
    }
    
    }
// /\w\@\w{1,}\.\w/.test("hugo@gmail.com");

let ej4 = document.querySelector('#ej4');
ej4.addEventListener('input',color);
let h24 = document.querySelector('#h24');

function color(){
    if (/\d{3}\,\d{3}\,\d{3}/.test(ej4.value)==true){
        h24.textContent=("El color hexadecimal es correcto");
    }else{
        h24.textContent=("El color hexadecimal es incorrecto");
    }
    
    }
// /\d{3}\,\d{3}\,\d{3}/.test("121,125,014");

let ej5 = document.querySelector('#ej5');
ej5.addEventListener('input',ip);
let h25 = document.querySelector('#h25');

function ip(){
    if (/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi.test(ej5.value)==true){
        h25.textContent=("La ip es correcta");
    }else{
        h25.textContent=("La ip es incorrecta");
    }
    
    }
// /\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/gi

let ej6 = document.querySelector('#ej6');
ej6.addEventListener('input',url);
let h26 = document.querySelector('#h26');

function url(){
    if (/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(ej6.value)==true){
        h26.textContent=("La URL es correcta");
    }else{
        h26.textContent=("La URL es incorrecta");
    }
    
    }
// /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test("https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP");

let ej7 = document.querySelector('#ej7');
ej7.addEventListener('input',contraseña);
let h27 = document.querySelector('#h27');

function contraseña(){
    if (hola.test(ej7.value)==true){
        h27.innerHTML=("La contraseña es correcta");
    }else{
        h27.innerHTML=("La contraseña es incorrecta");
    }
    
    }
// 

let ej8 = document.querySelector('#ej8');
ej8.addEventListener('input',nif);
let h28 = document.querySelector('#h28');

function nif(){
    if (/^\d{8}\w{1}$/.test(ej8.value)==true){
        h28.textContent=("El NIF es correcto");
    }else{
        h28.textContent=("El NIF es incorrecto");
    }
    
    }
// /^\d{8}\w{1}$/.test("02770118f");

let ej9 = document.querySelector('#ej9');
ej9.addEventListener('input',matricula);
let h29 = document.querySelector('#h29');

function matricula(){
    if (/^\d{4}\s\w{3}$/.test(ej9.value)==true){
        h29.textContent=("La matrícula es correcta");
    }else{
        h29.textContent=("La matrícula es incorrecta");
    }
    
    }
// /^\d{4}\s\w{3}$/.test("fght 253");