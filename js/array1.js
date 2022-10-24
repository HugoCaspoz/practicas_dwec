let arr = [
    {nombre: 'Victor', curso: 1, ciclo: 'DAW'},
    {nombre: 'Pepe', curso: 2, ciclo: 'SMR'},
    {nombre: 'Luis', curso: 1, ciclo: 'DAW'},
    {nombre: 'Andres', curso: 1, ciclo: 'ASIR'}
];
    let a = arr.filter (item => item.ciclo =='SMR' , item => item.curso =='2');

        console.log (a);