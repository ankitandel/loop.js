let readlinesync=require("readline-sync")
let userChances=readlinesync.questionInt("how many time you want");
let randomNumber=Math.floor(Math.random()*10);
chances=userChances;
for(let i=chances;i>0;i--){
    console.log("you have"+i+"chances to guess")
    userguess=readlinesync.questionInt("guess number")
    if(userguess==randomNumber){
        console.log("conrats!,your guess is right")
        break
    }
    else if(userguess<randomNumber){
        console.log("go higher")
    }
    else if(userguess>randomNumber){
        console.log("go lower")
    }else if(i==1){
        console.log("sadly!,your chance are competed")
    }
}

        
