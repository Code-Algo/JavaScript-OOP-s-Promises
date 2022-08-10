// Codewars 1

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];

};
console.log(sumTwoSmallestNumbers([9, 100 ,12, 18, 22]))

// Codewars 2

String.prototype.toJadenCase = function () {
     var words = this.split(' ');
  
    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
};

// HW #1 
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (const[key] of Object.entries(person3)){
    console.log(key)
}

// HW 2. Again, I feel as though this is worded strangely but I did what it wanted?

function Person(name, age){
    this.name = name;
    this.age = age;

}

const myPerson = new Person('David', 23)
const myPerson2 = new Person('Jerry', 42)

// arrow increments age of David
let increment = () => myPerson.age++;
let printInfo = () => Object.entries(myPerson);
let printInfo2 = () => Object.entries(myPerson2);


console.log(increment())
console.log(increment())
console.log(increment())
console.log(printInfo())
console.log(printInfo2())

// HW 3 // Whoever worded these problems is an alien trying to sound human. Big Word vs Small Number? It's just strange.

 const isGreater = (str)=>{
     return new Promise((resolve, reject)=>{
         if(str.length >= 10){
             resolve(true)
        }else{
             reject(false)
         }
     })
 }
 console.log(isGreater('abcderakkfnknasfnfjkfn'))

 isGreater('asuper').then(
    (result)=>{
        console.log('Big Word')
    }
 ).catch(
    (error)=>{
        console.log('small number')
    }
 )