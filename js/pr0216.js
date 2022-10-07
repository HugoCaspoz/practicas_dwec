function convertToBytes( capacity, from ){
    switch ( from ) {
        case "B" || "Byte":{
            return capacity;
        }
        case "KB" || "Kilobyte":{
            return capacity*1000;
            break;
        }
        case "MB" || "Megabyte":{
            return capacity*1_000_000;
        }
        case "GB" || "Gigabyte":{
            return capacity*1_000_000_000;
        }
        case "TB" || "Terabyte":{
            return capacity*1_000_000_000_000;
        }
        case "PB" || "Petabyte":{
            return capacity*1_000_000_000_000_000;
        }
        case "EB" || "Exabyte":{
            return capacity*1_000_000_000_000_000_000;
        }
        default:{
            return "error"
        }
    }}

console.log(convertToBytes(2,"GB"));

