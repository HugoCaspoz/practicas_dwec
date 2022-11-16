let divMonths = document.getElementById('months');
let meses ='Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre'.split (" ");

for (let number = 1; number <= 12; number++){
    let spannumber = document.createElement('span');
    divMonths.append(spannumber);
    spannumber.classList.add('month');

    spannumber.textContent += `
            ${number}
            ${meses[number-1]}`
}

// for (let number = 0; number <= 30; number++){
//     let spannumber = document.createElement('span');
//     numbers.append(spannumber);
//     spannumber.classList.add('number');
//     spannumber.textContent += `${number}`;
// }