let arr = [
    {   name: 'Victor',
        surname: 'González',
    },
    {
        name: 'Pepe',
        surname: 'Pérez',
    }]

function generateUsername(arr) {
    let nickname = arr.map(item =>{
        return  item.name.charAt(0).toLowerCase() + item.surname.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"") + Math.trunc(Math.random()*11,0)+ Math.trunc(Math.random()*11,0);
    })

    let i = 0;
    arr.forEach(usuario => {
        usuario["nickname"] = nickname[i];
        i++;
    });
    return arr;
}


    console.log(generateUsername( arr ));