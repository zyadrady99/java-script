function sum(...number){
    return number.reduce((num,sum)=>  num + sum , 0)
}

console.log(sum(1,2,3,4,5));
