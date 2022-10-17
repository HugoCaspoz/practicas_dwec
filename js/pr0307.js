let str = "dingjodg";

function countVowels ( str ){
    let vocales = "aeiou";
    let cantidadVocales=0;

            for (const letra of str) {
                if (vocales.includes (letra.toLowerCase())) {
                    cantidadVocales++;
                }
            }
            return cantidadVocales;
    
    };

        console.log (countVowels(str));


        