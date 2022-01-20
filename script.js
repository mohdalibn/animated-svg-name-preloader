const preloader = document.querySelectorAll("#preloader path");


for(let i = 0; i < preloader.length; i++){
    console.log(`Letter ${i} is ${preloader[i].getTotalLength()}`)
};
