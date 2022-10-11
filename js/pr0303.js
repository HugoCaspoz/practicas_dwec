let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    expediente: "128",
};

function insersectObjects(obj1, obj2){
    let int = {};

    for (let key in obj1) {
        if (key in obj2){
            int [key] = 0;
        }
      }

    return int;
    
    };
        
        console.log (insersectObjects(ciclo, alumno));