let num = 1221;

let str=num.toString();

let bag="";

for(let i=str.length-1;i>=0;i--){
    bag+=str[i] ; 
}if(bag==str){
    console.log(num,"is a palindrome")
}else{
    console.log(num,"is not a palindrome")
}