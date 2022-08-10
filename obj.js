jody = {
    name: "Jody",
    age: 95,
    favColor: "Blue"
}

console.log(jody)
console.table(jody)

console.log(jody['age'])
console.log(jody.age)

let myKey = "age"
console.log(jody.myKey) // No, cant do
console.log(jody[myKey])

jody.isGoodCoder=false
console.table(jody)
console.log("Send Jody to Coding Camp")
jody.isGoodCoder=true
console.table(jody)

myNewKey="hairColor"
'Dirty Blonde'
//jody.myNewKey='Dirty Blonde' //Noo
jody[myNewKey]='Dirty Blonde'
console.table(jody)

let person2 = {
    name: "Max",
    age:31,
    prog_languages:['JavaScript','Python','C++', 'Java'],
    fav_color: "Blue",
    teams:[
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball:['Chicago Bulls','Chicago Sky'],
            soccer:['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball:'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United','Liverpool']
        }
    ]
}
console.log(person2.fav_color)
console.log(person2.prog_languages[2])
console.log(person2.teams[1].football)
console.log(person2.teams[0].soccer[0])

// Destructuring
shoe={
    name:'Red Nike',
    size:11,
    color:'red'
}

const test=myObj=>{
    console.log(myObj.name)
    console.log(myObj.size)
    console.log(myObj.color)
}

const {nam, size, color} =myObj
console.log(nam)
console.log(size)
console.log(color)

test(shoe)

const test1 = ({nam, size, color}) =>{
    console.log(nam)
    console.log(size)
    console.log(color)
}

test1(shoe)

a=[1,2,3]
const test3=([a,b,c])=>{
    console.log(a,b,c)
}

test3(a)


// const myFunction=(quote, {firstName, lastName, nickName, age, height})=>{
//     let reply = null
//     let myObj={
//         // id:2
//     }
//     console.log(quote)
//     console.log(firstName)
//     console.log(nickName)
//     console.log(age)
//     console.log(reply ??`buy a toothbrush`)
//     console.log(myObj?.id ?? 789)
// }

// myFunction(quote, person)

let testlist=[1,2,3,4,5,6,7,8,9]
console.log(testlist[5] ?? 123)
