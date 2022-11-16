let board = document.getElementById('board');

let table = document.createElement('table');
table.classList.add("table");

for (let number=0; number<9; number++){
    let tr = document.createElement('tr');
    tr.classList.add(`tr${8-number}`);
    table.append(tr);

    let vocals ='A B C D E F G H'.split (" ");

    for (let number = 0; number <9; number++){
        let td = document.createElement('td');
        tr.append(td);

        if (number == 0){

        td.classList.add(`nada`);
        let nada = document.getElementsByTagName('td.nada');

        for (let number = 0; number<9; number++){

             nada.textContent += `${vocals[number]}`
        }
        
        }else {
            td.classList.add(`${vocals[number-1]}${number}`);

        }
    }

    
    
}

board.append(table);



//tr.innerHTML += `${vocals[number-1]}`

//let tr = document.getElementById('board');

// let board = document.getElementsByTagName('board');

// for (let number=0; number<enlaces.length; number++){
//     if (enlaces[number].href=="https://www.google.es/"){
//         google++;
//     }
// }





// //numeros de parrafos
// parrafos.innerHTML = p.length;
// //página a la que enlaza del segundo enlace
// let index = enlaces.length-2;
// penultimoenlace.innerHTML = (enlaces[index].href);
// //cuantos enlaces redirigen a https://google.es/
// linksgoogle.innerHTML = google;
// //cuantas palabras hay en el segundo parrafo
// palabrassegundoparrafo.innerHTML = p2.length;