let form = document.forms.login;
let submit = document.getElementById('btn');
submit.addEventListener('click',handleClick)




function handleClick(event){
    let nombre = document.querySelector('#nombre');
    let user = nombre.value;
    console.log("Usuario: "+user);

    let pass = document.querySelector('#pass');
    let contrasena = pass.value;
    console.log("Contraseña: " + contrasena);

    contrasena = contrasena.split('');

    let numLetters = 0;
    let numero = 0;
    let simbolos = 0;
    let mayusculas = 0;
    let seguridad=0;

    contrasena.forEach(caracter => {  //'p'
        console.log(caracter);
        if(caracter >=0 || caracter <=9){  
            numero++
        }
        if('abcdefghijklmnñopqrstuvwxyz'.includes(caracter)){
            numLetters++
        }
        if('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.includes(caracter)){
            mayusculas++
        }
        if('-.,;._¡?¿º/&%$·)(/'.includes(caracter)){
            simbolos++
        } 
    });
        letrasTotales = numero + numLetters + simbolos + mayusculas;
        
        seguridad = Math.floor(letrasTotales / 3);

        if (numero>0 ){
            seguridad++;
        }
        if (numLetters>0 ){
            seguridad++;
        }
        if (mayusculas>0 ){
            seguridad++;
        }
        if (simbolos>0 ){
            seguridad++;
        }

console.log(numero);

        if (seguridad<=4){
            console.log("Instantaneo");
        }else  if (seguridad==5){
            console.log("2 horas");
        }else  if (seguridad==6){
            console.log("10 años");
        }else  if (seguridad==7){
            console.log("50 años");
        }else  if (seguridad>7){
            console.log("+100 años");
        }
    



    }