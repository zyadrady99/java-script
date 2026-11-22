function Week_days(num){
switch(num){
case 1: 
    return "sunday";
case 2:
    return "monday";
case 3:
    return "tuesday";
case 4: 
    return "wednesday"; 
case 5:
    return "thursday";
case 6:
     return "friday";
case 7:
    return "satrday";
default : 
    return "invalid"
}
}
var num = 4
console.log(Week_days(num));
