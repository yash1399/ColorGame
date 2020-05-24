
let generateRandomColors = (num) => {
  let arr =[];
  for( let i = 0; i< num; i++ )
    {arr.push(randomColor())}
  return arr;
}
const randomColor = () =>{
 let r = Math.floor(Math.random() * 256 );
 let b = Math.floor(Math.random() * 256 );
 let g = Math.floor(Math.random() * 256 );
  return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
const reset = () => {
  colors = generateRandomColors(numsquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  msgDisplay.textContent= ""; 
  resetButton.textContent = "New Colors";
  for ( let i = 0 ; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display ="block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";

}
const pickColor = () => {
  let randomNo = Math.floor(Math.random() * colors.length)
  return colors[randomNo];
}
const setupModeButtons = () =>{
  for (let i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
      reset();
    });
  }
}
const setupSquares= () => {
  for ( let i = 0 ; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
     let clickedColor = this.style.backgroundColor
     if(clickedColor === pickedColor){
       msgDisplay.textContent = "Correct!";
       changeColor(clickedColor);
       h1.style.backgroundColor = clickedColor;
       resetButton.textContent = "Play again?"
     }else{
       this.style.backgroundColor ="#232323" 
       msgDisplay.textContent ="Try again"
     }
    });
  }
}
const init = () => {
  setupModeButtons();
  setupSquares();
  reset();
}

let numsquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let msgDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init(); 
const changeColor = (color) =>{
  for ( let i = 0; i < squares.length; i++ ){
    squares[i].style.backgroundColor = color;
  }
}
resetButton.addEventListener("click", function(){
  reset();
})

