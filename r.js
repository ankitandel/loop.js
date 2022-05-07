// while loop

var x=require("readline-sync")
var num=x.questionInt("enter the number: ")
var rev=0;
while (num>0){
  rev=rev*10+num%10
  var num=parseInt(num/10)
}
console.log(rev)


// do while loop

// var n=require("readline-sync");
// var num=n.questionInt("enter the number: ");
// rev=0
// do{
//   rev=rev*10+num%10
//   num=parseInt(num/10)

// }while (num>0)
// console.log(rev);


// for loop

// const n=require("readline-sync");
// var num=n.questionInt("enter the number: ");
// rev=0
// for(rev=0;num>0; rev=rev*10+num%10, num=parseInt(num/10)){
// }
// console.log(rev);




