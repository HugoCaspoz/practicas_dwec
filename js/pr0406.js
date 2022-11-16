let btn = document.getElementById('btn');

function handleClick(event){
    let img = document.querySelectorAll("img");
    let images = document.querySelector(".images");
        images.prepend(img[img.length-1]);
            

}
    
btn.addEventListener("click",handleClick);