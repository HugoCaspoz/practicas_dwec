let nombre = prompt('Indica tu nombre'),
    n1 = prompt('Indica la nota de tu primer exámen');
    n1 = Number(n1);
    n2 = prompt('Indica la nota de segundo exámen');
    n2 = Number(n2);

let notamedia = (n2+n1)/2;
console.log(`hola ${nombre}, la nota media de tus exámenes es ${notamedia}.`);
