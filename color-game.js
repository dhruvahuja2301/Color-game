let mode = 6;
let colors = generateColor();
let pickedColor = chooseColor();
let square = document.getElementsByClassName("square");
let colorName = document.querySelector("#colorName");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let reset = document.getElementById("reset");
let modebtn = document.getElementsByClassName("mode");

document.body.addEventListener("load",start());

function start() {
    colorName.innerHTML = pickedColor;
    h1.style.backgroundColor = "cornflowerblue";
    for(let i=0;i<square.length;i++) {
        if(colors[i]) {
            square[i].style.display="block";
            square[i].style.backgroundColor = colors[i];
        }
        else 
        square[i].style.display = "none";
    }
    reset.innerHTML="New Colors";               
}

for (let i = 0; i < modebtn.length; i++) {
    modebtn[i].addEventListener('click', function() {
        modebtn[1].classList.remove("selected");
        modebtn[0].classList.remove("selected");
        this.classList.add("selected");
        this.textContent ==="Easy" ? mode = 3: mode = 6;
        resetColors();
    });    
}

for(let i=0;i<square.length;i++) {
    square[i].addEventListener("click",function() {
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            for (let i = 0; i < colors.length; i++) {
                square[i].style.backgroundColor = pickedColor;           
                message.textContent = "Correct";
                h1.style.backgroundColor = clickedColor;
                reset.innerHTML="Try Again?";           
            }
        }
        else {
            this.style.backgroundColor = document.body.style.backgroundColor;
            message.textContent = "Try Again";           
        }
    });
}

reset.addEventListener("click",function(){
    resetColors(mode);
});

function resetColors(){
    colors = generateColor();
    pickedColor = chooseColor();
    message.textContent = "";
    start();
}

function chooseColor() {
    return colors[Math.floor(Math.random() * mode)];    
}

function generateColor() {
    let arr=[];
    for(let i=0;i<mode;i++) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb("+r+", "+g+", "+b+")";
        arr.push(color);
    }
    return arr;
}
