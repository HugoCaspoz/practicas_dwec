let str = 12;
let baseFrom = 10;
let baseTo = 16;

function convertBase( str , baseFrom, baseTo ){

    console.log(str.toString(baseFrom));

    return (str, baseFrom).toString(baseTo);
    
    };

        console.log (convertBase(str, baseFrom, baseTo));