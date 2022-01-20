// This block of code is used to output the length of stroke-dashoffset for each individual letter

const preloader = document.querySelectorAll("#preloader path");


for(let i = 0; i < preloader.length; i++){
    console.log(`Letter ${i} is ${preloader[i].getTotalLength()}`)
};
