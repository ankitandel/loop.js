// while loop
let a=require("readline-sync");
var i=a.questionInt("enter the number");
orig=i
sum=0
while(i>0){
    sum=sum+(i%10)*(i%10)*(i%10)
    i=parseInt(i/10)
}if (orig==sum){
    console.log("armstrong num")
}
else{
    console.log("not armstrong num")
}


// do while loop
// let a=require("readline-sync");
// var i=a.questionInt("enter the number");
// orig=i
// sum=0
// do{
//     sum=sum+(i%10)*(i%10)*(i%10)
//     i=parseInt(i/10)
//     if (orig==sum){
//         console.log("armstrong num");
//     }
//     else{
//         console.log("not armstrong num");
//     }
// }while(i>0)


// let a=require("readline-sync");
// var i=a.questionInt("enter the number");
// orig=0
// sum=0
// for(orig=i;sum=sum+(i%10)*(i%10)*(i%10);i=parseInt(i/10)){
//     if(orig==sum){
//         console.log("armstrong num")
//         break
//     }
//     else{
//         console.log("not armstrong num")
//     }
// }

// let a=require("readline-sync");
// var i=a.questionInt("enter the number")
// org=0
// sum=0
// for(irg=0;sum=sum+(i%10)*(i%10)*(i%10);i=parseInt(i/10)){
//     if(org==sum){
//         console.log("armstrong")
//         break
//     }
//     else{
//         console.log("not armstrong")
//     }
// }




