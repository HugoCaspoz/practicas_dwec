let arr = ['Victor', 'Pepe', 'Luis', 'Andres'];


function sendMessage ( arr ){
    /*
    for (let i = 0; i<arr.length; i++){
        console.log (`Hola,  ${arr[i].nombre}  bienvenido al curso de DWEC`);
    };*/

    arr.forEach( function( item, index, array ) {
    console.log(`Hola, ${item} bienvenido al curso de DWEC`);
    } )
    
            
    
    };

        console.log (sendMessage(arr));