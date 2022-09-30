
let n=prompt("Dime un un numero");

while (n!=Number) {
    if(n!=null){
        break
    }
    n = prompt("Dime un otro numero");
    }
console.log(`Has introducido el numero ${n}`);