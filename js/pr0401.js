let h1 = document.getElementsByTagName('h1');
let numbers = document.getElementById('numbers');

for (let number = 0; number <= 30; number++){
numbers.innerHTML += `<span class="number">${number}</span>`;
}


h1.textContent = 'PR0401';