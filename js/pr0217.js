function convertToBytes( capacity, from, to ){
capacity=Number(capacity);
from=String(from);
to=String(to);
    switch ( to ){
        case "B" || "Byte":{
            switch ( from ){
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
            }
        }
        case "KB" || "Kilobyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1000;
                }
                case "KB" || "Kilobyte":{
                    return capacity;
                    break;
                }
                case "MB" || "Megabyte":{
                    return capacity*1_000;
                }
                case "GB" || "Gigabyte":{
                    return capacity*1_000_000;
                }
                case "TB" || "Terabyte":{
                    return capacity*1_000_000_000;
                }
                case "PB" || "Petabyte":{
                    return capacity*1_000_000_000_000;
                }
                case "EB" || "Exabyte":{
                    return capacity*1_000_000_000_000_000;
                }
                default:{
                    return "error";
                }
            }
        }
        case "MB" || "Megabyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1_000_000;
                }
                case "KB" || "Kilobyte":{
                    return capacity/1_000;
                }
                case "MB" || "Megabyte":{
                    return capacity;
                }
                case "GB" || "Gigabyte":{
                    return capacity*1_000;
                }
                case "TB" || "Terabyte":{
                    return capacity*1_000_000;
                }
                case "PB" || "Petabyte":{
                    return capacity*1_000_000_000;
                }
                case "EB" || "Exabyte":{
                    return capacity*1_000_000_000_000;
                }
                default:{
                    return "error";
                }
            }
        }
        case "GB" || "Gigabyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1_000_000_000;
                }
                case "KB" || "Kilobyte":{
                    return capacity/1_000_000;
                }
                case "MB" || "Megabyte":{
                    return capacity/1_000;
                }
                case "GB" || "Gigabyte":{
                    return capacity;
                }
                case "TB" || "Terabyte":{
                    return capacity*1_000;
                }
                case "PB" || "Petabyte":{
                    return capacity*1_000_000;
                }
                case "EB" || "Exabyte":{
                    return capacity*1_000_000_000;
                }
                default:{
                    return "error";
                }
            }
        }
        case "TB" || "Terabyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1_000_000_000_000;
                }
                case "KB" || "Kilobyte":{
                    return capacity/1_000_000_000;
                }
                case "MB" || "Megabyte":{
                    return capacity/1_000_000;
                }
                case "GB" || "Gigabyte":{
                    return capacity/1000;
                }
                case "TB" || "Terabyte":{
                    return capacity;
                }
                case "PB" || "Petabyte":{
                    return capacity*1_000;
                }
                case "EB" || "Exabyte":{
                    return capacity*1_000_000;
                }
                default:{
                    return "error";
                }
            }
        }
        case "PB" || "Petabyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1_000_000_000_000_000;
                }
                case "KB" || "Kilobyte":{
                    return capacity/1_000_000_000_000;
                }
                case "MB" || "Megabyte":{
                    return capacity/1_000_000_000;
                }
                case "GB" || "Gigabyte":{
                    return capacity/1_000_000;
                }
                case "TB" || "Terabyte":{
                    return capacity/1_000;
                }
                case "PB" || "Petabyte":{
                    return capacity;
                }
                case "EB" || "Exabyte":{
                    return capacity*1_000;
                }
                default:{
                    return "error";
                }
            }
        }
        case "EB" || "Exabyte":{
            switch ( from ){
                case "B" || "Byte":{
                    return capacity/1_000_000_000_000_000_000;
                }
                case "KB" || "Kilobyte":{
                    return capacity/1_000_000_000_000_000;
                }
                case "MB" || "Megabyte":{
                    return capacity/1_000_000_000_000;
                }
                case "GB" || "Gigabyte":{
                    return capacity/1_000_000_000;
                }
                case "TB" || "Terabyte":{
                    return capacity/1_000_000;
                }
                case "PB" || "Petabyte":{
                    return capacity/1_000;
                }
                case "EB" || "Exabyte":{
                    return capacity;
                }
                default:{
                    return "error";
                }
            }
        }
        default:{
            return "error"
        }
    } 
    }


console.log(convertToBytes( 5, "GB", "Megabyte" ));
