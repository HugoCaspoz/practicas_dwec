let diffLevel = document.querySelectorAll('.diff-level');
let intervalo;

for (let i=0; i<diffLevel.length; i++){
        diffLevel[i].setAttribute('data-coord',i);
        diffLevel[i].addEventListener('click',niveles)
        diffLevel[i].addEventListener('contextmenu', niveles)
        diffLevel[i].onmousedown = () => false;    
}    

        function niveles(event){
            if(event.ctrlKey){
                event.target.classList.toggle('selected')
            }else{
                diffLevel.forEach((level) => {
                    level.classList.remove('selected')
        
                })
                event.target.classList.add('selected')
        
        
            }
        }

let gameZone = document.getElementById('game-zone');
let score = document.getElementById('score');
        
        // let contador = document.createElement('div');
        // counter.append(contador);
        // contador.style.marginLeft=50+'vh';
        number=0;
        score.innerHTML=number;
        
        let rectangulo = document.createElement('div');
        gameZone.append(rectangulo);
        rectangulo.style.backgroundColor='red';
        
        let altura = Math.floor(Math.random()*100+100);
        let ancho = Math.floor(Math.random()*100+100);
        
        rectangulo.style.height=altura+'px';
        rectangulo.style.width=ancho+'px';
        
        rectangulo.style.position='relative';
        rectangulo.style.left=Math.floor(Math.random()*(gameZone.clientWidth-ancho))+'px';
        rectangulo.style.top=Math.floor(Math.random()*(gameZone.clientHeight-altura))+'px';
        rectangulo.addEventListener('click',rectanguloAl)
        
        
        
        function rectanguloAl(event){
        number++;
        score.innerHTML=number;
        rectangulo.style.backgroundColor='red';
        rectangulo.style.height=altura+'px';
        rectangulo.style.width=ancho+'px';
    
        rectangulo.style.position='relative';
        rectangulo.style.left=Math.floor(Math.random()*(gameZone.clientWidth-ancho))+'px';
        rectangulo.style.top=Math.floor(Math.random()*(gameZone.clientHeight-altura))+'px';
        }

        let start = document.querySelector('#btn-start');
        start.addEventListener("click",cronometrar);

        let reset = document.querySelector('#btn-reset');
        reset.addEventListener("click",reiniciar);

        let crono = document.querySelector('#time');

        let tiempo = 0;

        let jugador = document.querySelector('player-input');

        let ranking = document.querySelectorAll('.ranking-item');
        console.log(ranking);
        let rankingname = document.querySelectorAll('.ranking-name');

        function cronometrar(){
            intervalo = setInterval( () => {
                tiempo = tiempo + 0.05;
                crono.innerHTML = (tiempo.toFixed(2));
            }, 50)
            start.removeEventListener("click",cronometrar);
        }

        function reiniciar(){
            clearInterval(intervalo);
            crono.innerHTML = "0.0";
            tiempo = 0;
            start.addEventListener("click",cronometrar);

        }

