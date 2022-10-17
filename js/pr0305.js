let ciclo = {
    name:"daw",
    familia: "Informatica"
};
let alumno = {
    expediente: "128",
};

function removeUndefined(a){

    let newObj = {};

    for( let i in a){
        if (a[i] != undefined){
            newObj[i] = a[i];
        }
    }
    return newObj;
    
    };
        
        console.log (removeUndefined(ciclo));