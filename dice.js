function refreshment(e){
    console.log('refreshing');
    
    e.preventdefault();
};




function rollDice1(){
    
    var dice1=Math.floor(Math.random()*6+1)
    var dice2=Math.floor(Math.random()*6+1)
    const image1Path="/dice game/images/dice"+dice1+".png"
    const dice1Image=document.getElementById("dice1Image")
    dice1Image.src=image1Path

    console.log(dice1,dice2)
    
    const image2Path="/dice game/images/dice"+dice2+".png"
    const dice2Image=document.getElementById("dice2Image")
    dice2Image.src=image2Path
    if(dice1>dice2){
        document.getElementById("announcment").innerHTML="Player 1 wins"
    }
    else if(dice1<dice2){
        document.getElementById("announcment").innerHTML="Player 2 wins"
    }
    else{
        document.getElementById("announcment").innerHTML="Draw"
    }

}

function announcment(){
    console.log(dice1)
}
