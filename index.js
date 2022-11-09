let restatBtn=document.getElementById("restart-btn")
let boxes =document.getElementsByClassName("grid-box")
let winner= document.getElementById("winner-box")
let turnMusic= new Audio("ting.mp3")
let winmp3= new Audio("win.mp3")
let arrBOxex=Array.from(boxes)

const textO="O"
const textX="X"
let currentplayer =textX

arrBOxex.forEach(box =>box.addEventListener("click",boxclicked))

function boxclicked(e){
    e.target.innerText=currentplayer
    currentplayer=currentplayer == textX?textO:textX 
    turnMusic.play()
    checkWinner()
}
const winningCombination=[["upper-left","upper-middle","upper-right"],
                            ["middle-left","middle-middle","middle-right"],
                            ["bottom-left","bottom-middle","bottom-right"],
                            ["upper-left","middle-left","bottom-left"],
                            ["upper-middle","middle-middle","bottom-middle"],
                            ["upper-right","middle-right","bottom-right"],
                            ["upper-left","middle-middle","bottom-right"],
                            ["upper-right","middle-middle","bottom-left"]
                            ] 

 function checkWinner(){
    for(ele of winningCombination){
        let [a,b,c]=ele
        let first= document.getElementById(a).innerText
        let second= document.getElementById(b).innerText
        let third= document.getElementById(c).innerText
        if(first!=="" && second!=="" && third!=="" && first==second && first==third){
            winner.innerHTML=`"${first}" is the winner!`
            winmp3.play()
        }
        
    }
 }                           
function restart(){
    arrBOxex.forEach(box=>{
        box.innerText=""
    })
    currentplayer=currentplayer==textO?textX:textX
    winner.innerHTML="Game Going on!"
}