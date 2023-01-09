let coms = {
    'Castilla Y Leon' : {
        "Leon" : [
            "Leon",
            "Astorga",
        ],
        "Palencia" : [
            "Carrion",
            "Palencia",
        ]
    },
    "Asturias" : {
        "Asturias" : [
            "Aviles",
            "Oviedo",
        ]
    },
    "Madrid" : {
        "Madrid" :[
            "Chueca",
            "Madrid Centro",
        ]
    }
}

let comunidad = document.getElementById('comunidad');
let provincia = document.getElementById('provincia');
let localidad = document.getElementById('localidad');
comunidad.innerHTML+=`<option>Seleccione una comunidad</option>`;

for (let key in coms){
    comunidad.innerHTML+=`<option>${key}</option>`;
    
}

comunidad.addEventListener('input',handleInput)

function handleInput(event){
    console.log(event.target.value);
    console.log(coms[event.target.value]);

    provincia.innerHTML+=`<option>Seleccione una provincia</option>`;

    for (let key in coms[event.target.value]){

        provincia.innerHTML+=`<option>${key}</option>`;
        provincia.addEventListener('input',localidades)
    
    }
}
function localidades(event){
    console.log(event.target.value);
    console.log(coms[event.target.value]);
    localidad.innerHTML+=`<option>Seleccione una localidad</option>`;

    let local = coms.find(array => array==coms[event.target.value])

    local.forEach(element => {
        localidad.innerHTML+=`<option>${element}</option>`;    

    });
    
}

