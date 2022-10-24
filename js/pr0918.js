let arr = [1, 2, 3];
let pow = 4;

function generateUsername ( arr ){

    let potencia = arr.map( item => item**pow );
    return (potencia);
}
        console.log (generateUsername(arr));