let arr = [1, 2, 3];
let pow = 4;

function createPow ( arr, pow ){

    let potencia = arr.map( item => item**pow );
    return (potencia);
}
        console.log (createPow(arr, pow));