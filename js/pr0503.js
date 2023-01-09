let table = document.querySelector('table');
for (let number = 0; number<10; number++){
    let tr=document.createElement('tr');
    table.append(tr);
    for (let i=0; i<10; i++){
        td=document.createElement('td');
        td.innerHTML=`${number}${i}`;
        td.setAttribute('data-coord',number+''+i);
        tr.append(td)
        td.addEventListener('click',handleClick)
        td.addEventListener('contextmenu', handleClick)
        td.onmousedown = () => false;    
    }
    
}



function handleClick(event){
    if(event.type == 'click'){

            event.target.classList.add('selected')

    }else{
        event.preventDefault();
        event.target.classList.add('rojo')
        event.target.classList.remove('selected')

    }
    console.log("La casilla es la número "+event.target.dataset.coord);
}