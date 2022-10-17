let str = "dingjodg";
let obj = {};
function countLetters ( str ){
    for (let i=0; i<str.length; i++){
        let letra=str[i];
        if (letra in obj){
            obj[letra]++;
        }else{
            obj[letra]=1;
        }
    }    
    return obj;
            
    
    };

        console.log (countLetters(str));