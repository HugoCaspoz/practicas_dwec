let arr = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
];



function getAlumnosByCiclo ( arr , ciclo ){
    /*arr.forEach( (alumno) => {
        if (alumno.ciclo==str){
            curso = (alumno.nombre && alumno.ape1 && alumno.ape2);
        };    
        });
        return curso;*/
        
        let users = arr.filter( item => item.ciclo == ciclo );

        let nombres = users.map( item => {
            item.co
        });
        return (nombres);


}
    console.log (getAlumnosByCiclo (arr , 'DAW'));