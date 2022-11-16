let divMonths = document.getElementById('months');
let meses ='Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre'.split (" ");

for (let number = 1; number <= 12; number++){
divMonths.innerHTML += `
<div class="month">
    <div class="month-number">${number}</div>
    <div class="month-name">${meses[number-1]}</div>
</div>`
}

