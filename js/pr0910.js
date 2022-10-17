let str = "hola";
function replaceWithPosition ( str ){
    

    for (let i=0; i<str.length; i++) {
        switch (str[i]){
            case "a": str[i] = 1;
            case "b": str[i] =2;
            case "c": str[i] =3;
            case "d": str[i] =4;
            case "e": str[i] =5;
            case "f": str[i] =6;
            case "g": str[i] =7;
            case "h": str[i] =8;
            case "i": str[i] =9;
            case "j": str[i] =10;
            case "k": str[i] =11;
            case "l": str[i] =12;
            case "m": str[i] =13;
            case "n": str[i] =14;
            case "o": str[i] =15;
            case "p": str[i] =16;
            case "q": str[i] =17;
            case "r": str[i] =18;
            case "s": str[i] =19;
            case "t": str[i] =20;
            case "u": str[i] =21;
            case "v": str[i] =22;
            case "w": str[i] =23;
            case "x": str[i] =24;
            case "y": str[i] =25;
            case "z": str[i] =26;
        };

    }
    return str;
            
    
    };

        console.log (replaceWithPosition(str));