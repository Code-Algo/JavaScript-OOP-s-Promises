// Date in js

let day = new Date();
console.log(day);
day = day.getDay();
console.log(day);

let literalDay=new Date().toString()
console.log(literalDay)
console.log(literalDay.split(' '))
literalDay = literalDay.split(' ')[0]
console.log(literalDay)

day = 4
switch(day){
    case 0:
        console.log('Go To Church')
        break;
    case 1:
        console.log('write code')
        break;
    case 2:
        console.log("Testing Tuesday")
        break;
    case 3:
        console.log("Testing more code")
        break;
    case 4:
        console.log("Write feature")
        // break;
    case 5:
        console.log("Test coding things")
        break;
    case 6:
        console.log("Doing more things and stuff")
        break;
    default:
        console.log('You are making up days')

}


switch(literalDay){
    case 'sun':
        console.log('Go To Church')
        break;
    case 'mon':
        console.log('write code')
        break;
    case 'tue':
        console.log("Testing Tuesday")
        break;
    case 'wed':
        console.log("Testing more code")
        break;
    case 'thu':
        console.log("Write feature")
        break;
    case 'fri':
        console.log("Test coding things")
        break;
    case 'sat':
        console.log("Doing more things and stuff")
        break;
    default:
        console.log('You are making up days')

}