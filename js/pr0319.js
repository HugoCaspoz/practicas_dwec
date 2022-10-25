let arr = [1, 2, 3, 4, 5];


function max ( arr ){
    acum = arr[0];
    let mayor = arr.reduce( (acum, item, index, arr) => {
        if (acum<item){
            acum=item;
        }
        return acum;
        }, 0 );

}
        console.log (max (arr));