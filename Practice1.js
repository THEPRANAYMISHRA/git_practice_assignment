let num=12;
let count=0;

for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}if(count==2){
    console.log(num ," is a ptime number");
}else{
    console.log(num ," is not a ptime number");
}