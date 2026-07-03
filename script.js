let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let restartBtn = document.querySelector(".restart");
let Message = document.querySelector("#msg");
let msgcontainer = document.querySelector(".outerContainer");

let turnA = true;
// let turnB;
let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
  turnA = true;
  enableBox();
  msgcontainer.classList.add("hide1");

};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // alert("box is clicked")
    if (turnA === true) {
      box.innerText = "O";
      // turnB = true;
      turnA = false;
    } else {
      box.innerText = "X";
      turnA = true;
      // turnB = false;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    Message.innerText ="";

  }
};
const showWinner = (winner) => {
  Message.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide1");  
  disableBox();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let value1 = boxes[pattern[0]].innerText;
    let value2 = boxes[pattern[1]].innerText;
    let value3 = boxes[pattern[2]].innerText;
    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 == value2 && value1 == value3) {
        console.log("WINNER", value1);
        // value1.style.textTransform ="uppercase";
                showWinner(value1);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);
