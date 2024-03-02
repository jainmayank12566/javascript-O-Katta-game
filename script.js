const boxes=document.querySelectorAll(".box");
const resetBtn=document.getElementById("reset-button");
const newGameBtn=document.getElementById("new-btn");
const msgContainer=document.querySelector(".msg-container");
const mgs=document.querySelector("#msg");
let turnO=true;//playerX,playerO
let count=0;//to track draw
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const gameDraw=()=>{
    mgs.innerText=`Game was a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            box.style.color="red";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="blue";
            turnO=true;
        }
        count++;
        box.disabled=true;
        checkWinner();
        if(count===9){
            gameDraw();
        }
    })
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    mgs.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            }
        }
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetGame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);