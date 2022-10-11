let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    expediente: "128",
};

function mergeObjects(obj1, obj2){

    let mergeobj = {
        ...obj1,
        ...obj2
    };

    return mergeobj;
    
    };
        
        console.log (mergeObjects(ciclo, alumno));