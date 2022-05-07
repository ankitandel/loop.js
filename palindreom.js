// let a=require("readline-sync");
// var i=a.questionInt("enter the number");
// rev=0
// x=i
// while (i>0){
//     rev=(rev*10)+i%10
//     i=parseInt(i/10)
// }if(x==rev){
//     console.log("palindrome num")
// }
// else{
//     console.log("not palindrome")
// }

// var n="mom"
// var b=""
// var i=n.length-1
// while(i>=0){
//     b=b+(n[i])
//     i--
// }
// if(n==b){
//     console.log("it is palindreom")
// }
// else{
//     console.log("it is not palindreom")
// }



let a=require("readline-sync");
var n=a.question("enter the number");
var b=""
var i=n.length-1
while(i>=0){
    b=b+(n[i])
    i--
}
if(n==b){
    console.log("it is palindreom")
}
else{
    console.log("it is not palindreom")
}






