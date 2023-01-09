renderPage();

let header = document.getElementById("header");
let img = document.createElement('img');
img.classList.add('img');
header.innerHTML = `
<div>
<h1>Examen DWEC</h1>
<h2>Primera evaluación - 18/11/2022</h2>
</div>`;



function renderPage() {
    let characterNodes = results.map( createCharacterNode );

    let peopleListCharacters = document.getElementById('people-list-characters');
    peopleListCharacters.innerHTML = '';
    peopleListCharacters.append(...characterNodes);
    let buttons = document.querySelectorAll('.btn btn-char');
    buttons.forEach( (btn) => {
        let detallesNodes = results.map( detalles );
        console.log("Añadiendo listener")
        btn.addEventListener( 'click', detallesNodes );
    } )
}
function createCharacterNode( {name, birth_year, homeworld } ) {
    // Creamos el div del personaje
    let divCharacter = document.createElement('div');
    divCharacter.classList.add('character');
    if (name==null || name==''){
        name ='-';
    }
    if (birth_year==null || birth_year==''){
        birth_year ='-';
    }
    if (homeworld.name==null || homeworld.name==''){
        homeworld.name ='-';
    }
    divCharacter.innerHTML = `
        <div class="character-name">${ name }</div>
        <div class="character-birth-year">${ birth_year }</div>
        <div class="character-homerworld" >${ homeworld.name}</div>
        <div class="btn btn-char">Detalle</div>
    `;
    
    divCharacter.append;
    
    return divCharacter;
     }



     function detalles(event) {
    
        // Se construye el carrito a partir de la variable detail table
        let detalle =  carrito.map( ( {height, mass, eyeColor,birth_year,homeworld,population} ) => {
             height = document.createElement('height');
             mass = document.createElement('mass');
             eyeColor = document.createElement('eye-color');
             birthYear = document.createElement('birth-year');
             homeworld = document.createElement('homeworld');
             population = document.createElement('population');

            height.innerHTML=`${height}`;
            mass.innerHTML=`${mass}`;
            eyeColor.innerHTML=`${eyeColor}`;
            birthYear.innerHTML=`${birthYear}`;
            homeworld.innerHTML=`${homeworld}`;
            population.innerHTML=`${population}`;

        } );
    
    }

