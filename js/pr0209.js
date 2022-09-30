let n = prompt("Dime una calle");
n = String(n);


if ( n == "Calle Los Claveles" || n=="Calle El Rosal" || n=="Calle Las Hortensias" ||  n=="Calle Las Margaritas") {
    console.log("Línea 1");
    } else if (n == "Calle Teleno" || n=="Calle Catoute" || n=="Calle Peña Ubiña" || n=="Calle Vizcodillo") {
        console.log("Línea 2");
        }else if (n == "Calle Astorga" || n=="Calle La Bañeza" || n=="Calle Benavente") {
            console.log("Línea 3");
                }else {
                    console.log("No hay líneas para esa calle");
                }