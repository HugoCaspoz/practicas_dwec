let n = prompt('Dime un número');
n = Number(n);
let estrella = "*";
let destrella = "*";

for ( let m=1; m<=n; m++) {
    console.log(`${destrella}` );
    destrella += estrella;
    }