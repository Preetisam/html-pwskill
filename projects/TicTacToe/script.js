console.log("Welcome to TicTac Toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let flip = "X";

//function tp change the turn
const changeTurn = () => {
  return flip === "X" ? "0" : "X";
};
//Function to check for thr a win
const checkWin = () => {
  let wins = [
    [0, 1, 2][(3, 4, 5)][(6, 7, 8)][(0, 3, 6)][(1, 4, 7)][(2, 5, 8)][(0, 4, 8)][
      (2, 4, 6)
    ],
  ];
  wins.forEach(e=>{
    if(boxtext[e[0]].innerText === boxtext)
  })
};
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = flip;
      flip = changeTurn();
      music.play();
      checkWin();
      document.getElementsByClassName("info")[0].innerText = "turn for " + flip;
    }
  });
});
