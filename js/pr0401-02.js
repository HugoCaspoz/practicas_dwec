let h1 = document.getElementsByTagName('h1');
let numbers = document.getElementById('numbers');



for (let number = 0; number <= 30; number++){
    let spannumber = document.createElement('span');
    numbers.append(spannumber);
    spannumber.classList.add('number');
    spannumber.textContent += `${number}`;
}


