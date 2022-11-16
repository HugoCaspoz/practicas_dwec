let h1 = document.getElementsByTagName('h1')[0];
let items = document.getElementsByTagName('li');
Array.from(items).forEach( (item)=>{
    item.textContent = 'AAA';
});
h1.textContent = 'Hola Mundo';