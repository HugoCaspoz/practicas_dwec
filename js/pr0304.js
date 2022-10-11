let ciclo = {
    name:"daw",
    familia: ""
};
let alumno = {
    name: "dam",
    familia: "Informatica",
};

function containsObject (a, b){
    let int = 0;
    for (let key in a) {


        if (!(key in b)){
            return false;
        }

    }
    return true;
    }    ;
        
        console.log (containsObject (ciclo, alumno));