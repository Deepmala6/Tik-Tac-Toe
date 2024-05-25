console.log("Welcome To My Tic Tok Toe")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0": "X"
}

// Function to check for win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win =[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText !== "")){
            document.querySelector ('.info').innerText = boxtext[e[0]].innerText + " Won "
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "380px"
            

        }
    })

}    



// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elment=>{
    let boxetext = elment.querySelector('.boxtext')
    elment.addEventListener('click',()=>{
        if(boxetext.innerText === ''){
            boxetext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if( !isgameover){
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;

            }

            
        }
    })

})

// ADD ONCLICK LISTENER TO RESET BUTTON
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(elment=>{
        elment.innerText = ""
    });
    turn ="X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"


})

