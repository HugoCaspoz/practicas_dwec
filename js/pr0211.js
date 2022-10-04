let n1 = prompt('Dime un número');
n1 = Number(n1);

while (n1==NaN ){
    n1 = prompt('Dime un número');

}
    if (n1%2==0){
        console.log(`Tu número es par`);
        }else if (n1%2==1) {
        console.log(`Tu número es impar`);
        }else{
        console.log(`Tu número es 0`);
        }