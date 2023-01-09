let juego = document.getElementById('juego');
let counter = document.getElementById('counter');

// let contador = document.createElement('div');
// counter.append(contador);
// contador.style.marginLeft=50+'vh';
console.log(juego);
number=0;
counter.innerHTML=number;

let rectangulo = document.createElement('div');
juego.append(rectangulo);
rectangulo.style.backgroundColor='red';

let altura = Math.floor(Math.random()*100+100);
let ancho = Math.floor(Math.random()*100+100);

rectangulo.style.height=altura+'px';
rectangulo.style.width=ancho+'px';

rectangulo.style.position='relative';
rectangulo.style.left=Math.floor(Math.random()*(juego.clientWidth-ancho))+'px';
rectangulo.style.top=Math.floor(Math.random()*(juego.clientHeight-altura))+'px';
rectangulo.addEventListener('click',handleClick)



function handleClick(event){
number++;
counter.innerHTML=number;
rectangulo.style.backgroundColor='red';
rectangulo.style.height=Math.floor(Math.random()*100+100)+'px';
rectangulo.style.width=Math.floor(Math.random()*100+100)+'px';
rectangulo.style.position='relative';
rectangulo.style.left=Math.floor(Math.random()*100)+'%';
rectangulo.style.top=Math.floor(Math.random()*100)+'%';
}