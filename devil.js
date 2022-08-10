// console.log("above timeout")
// setTimeout(()=>console.log("in the timeout"), 2000)
// console.log("below timout")


const func=()=>{
    func2()
}

const func2=()=>{
    func3()
}

const func3=()=>{
    console.log('Hello!')
}

setTimeout(()=>console.log("in the timeout"), 0)
func()

function doHomework(subject, callback){
    console.log(`starting my ${subject} homework`)
    callback()
}

function myCallback(){
    console.log("I have finished my Homework... Time for some beer")
}
doHomework("javascript", myCallback)


// Promises
const isEvenNumber = (num)=>{
    return new Promise((resolve, reject)=>{
        if(num%2==0){
            resolve(true)
        }else{
            reject(false)
        }
    })
}

isEvenNumber(7).then(
    //handles the resolve
    (result)=>{
        console.log(`is Even Number is ${result}`)
    }
).catch(
    //handle rejection
    (error)=>{
        console.log(`is Even Number is ${error}`)
    }
)
console.log("hello")

// normal ole function
function increaseSalary(base, increase){
    const newSalary = base + increase
    console.log(`Your new Salary is ${newSalary}`)
    return newSalary
}

console.log(increaseSalary(30000, 3000))

function slowAddition(n1,n2){
    return new Promise((resolve, reject) =>{
            setTimeout(()=> resolve(n1+n2),2000)
        }
    )
}

// async await

async function increaseSalarySlowly(base, inc){
    const newSalary = await slowAddition(base, inc)
    console.log(`Your new Salary is ${newSalary}`)
    return newSalary
}
console.log("before")

increaseSalarySlowly(30000, 3000)
console.log("After")