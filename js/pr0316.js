let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function getOdd ( arr ){

    let impar = arr.filter( item => item % 2 == 1 );
    return(impar);
}
        console.log (getOdd(arr));