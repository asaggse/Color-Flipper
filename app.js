// const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const color2 = document.getElementById('text');

// btn.addEventListener('click', function(){
//     //get random number between 0 - 3
//     const randomNumber = randomNumberGenerator();
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
// })

btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[randomNumberGenerator()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})


function randomNumberGenerator() {
    // return Math.floor(Math.random() * colors.length);
    return Math.floor(Math.random() * hex.length);

}

submit.addEventListener('click', function(){
    document.body.style.backgroundColor = color2.value;
    color.textContent = color2.value;
    color2.value = "";
})