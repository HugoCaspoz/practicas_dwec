function isNumber( srt ){
srt = Number(srt);

    if (srt == NaN){
        return false;
    }else{
        return true;
    }
    };
    
    console.log(isNumber("o"));