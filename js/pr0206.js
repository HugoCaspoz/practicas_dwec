let n = prompt('Dime un número');
n = Number(n);

let k = prompt('Dime otro número');
k = Number(k);

let resultado = 1;
resultado=Number(resultado);

for ( let m=1; m<=k; m++) {
    resultado=n * m;
    console.log(`${n} * ${m} = ${resultado}`);
    }
    