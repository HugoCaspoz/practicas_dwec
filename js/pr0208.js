let n = prompt('Dime un número');
n = Number(n);


if ( n >=1994 && n<=2010) {
    console.log("Generación Z");
    }else if ( n >=1981 && n<=1993) {
        console.log("Generación Millenial");
        }else if ( n >=1969 && n<=1980) {
            console.log("Generación X");
            }else if ( n >=1949 && n<=1968) {
                console.log("Baby Boomer");
                }else {
                    console.log("Eres de otra época");
                }