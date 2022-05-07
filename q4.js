// let i=2
// do{
//    console.log(i);
// }
// while (i >10)

let readlinesync=require("readline-sync")
var num=readlinesync.questionInt("enter the number")


var sum=0
while(num!=0){
   var a=num%10;
   sum=sum+a
   num=num/10;
   num=Math.floor(num)
}
console.log(sum)