let n1 = prompt('Dime un número1');
n1 = Number(n1);

let n2 = prompt('Dime otro número2');
n2 = Number(n2);

let n3 = prompt('Dime otro número3');
n3 = Number(n3);

let n4 = prompt('Dime otro número4');
n4 = Number(n4);

let n5 = prompt('Dime otro número5');
n5 = Number(n5);

let mayor;
let menor;

if ( n1>n2 && n1>n3 && n1>n4 && n1>n5) {
    mayor=n1;
    }else if (n2>n1 && n2>n3 && n2>n4 && n2>n5){
    mayor=n2;
    }else if (n3>n1 && n2<n3 && n3>n4 && n3>n5){
        mayor=n3;
        }
        else if (n4>n1 && n4>n3 && n2<n4 && n4>n5){
            mayor=n4;
            }else{
                mayor=n5;
            }
if ( n1<n2 && n1<n3 && n1<n4 && n1<n5) {
    menor=n1;
    }else if (n2<n1 && n2<n3 && n2<n4 && n2<n5){
    menor=n2;
    }else if (n3<n1 && n2>n3 && n3<n4 && n3<n5){
        menor=n3;
        }
        else if (n4<n1 && n4<n3 && n2>n4 && n4<n5){
            menor=n4;
            }else{
                menor=n5;
            }
console.log(`El mayor es ${mayor} y el menor ${menor}`);
