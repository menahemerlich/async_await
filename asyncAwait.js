//1.1
function getMessage() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Hello from promise')
        }, 500)
    })
}

// getMessage().then(result=>{console.log(result)})

//1.2
function getRandomNumber() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res((Math.floor(Math.random() * 10) + 1))
        }, 700)
    })
}

//getRandomNumber().then(result=>{console.log(result)})

//1.3
function checkEven(n) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (n % 2 === 0) {
                res('Even number')
            }
            rej('Odd number')
        }, 500)
    })
}

// checkEven(4).then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// checkEven(5).then(result=>{console.log(result)}).catch(result=>{console.log(result)})

//1.4
function validateUser(username) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (username === 'admin') {
                res('Valid user')
            }
            rej('Unknown user')
        }, 1000)
    })
}

// validateUser('admin').then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// validateUser('guest').then(result=>{console.log(result)}).catch(result=>{console.log(result)})

//1.5
function fetchData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 1, name: 'Dana' })
        }, 1200)
    })
}

// fetchData().then(result=>{console.log(result)})

//1.6
function toUpperAsync(text) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (text.length > 0) {
                res(text.toUpperCase())
            }
            rej('Empty string')
        }, 600)
    })
}

// toUpperAsync('erlich').then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// toUpperAsync('').then(result=>{console.log(result)}).catch(result=>{console.log(result)})

//1.7
// function getNumbers() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res([10, 20, 30])
//         }, 800)
//     })
// }

// getNumbers().then(result=>{console.log(result)})

//1.8
function double(n) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(n * 2)
        }, 400)
    })
}

// function square(n) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(n * n)
//         }, 400)
//     })
// }

// double(3)
//     .then(result => square(result))
//     .then(finalValue => console.log(finalValue))

//1.9
function unstable() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                res('Success')
            }
            rej('Failure')
        }, 1000)
    })
}

// unstable().then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// unstable().then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// unstable().then(result=>{console.log(result)}).catch(result=>{console.log(result)})
// unstable().then(result=>{console.log(result)}).catch(result=>{console.log(result)})

//1.10
function loadConfig() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ mode: 'dev' })
        }, 700)
    })
}

// loadConfig().then(result => {console.log(result)})

//2.1
function waitForHello() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('Hello')
        }, 500)
    })
}

// const result = await waitForHello()
// console.log(result);

//2.2
function doubleAsync(n) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(n * 2)
        }, 600)
    })
}

async function run() {
    const result = await doubleAsync(5)
    console.log(`Result is: ${result}`);
}

// run()

//2.3
function fetchUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ id: 1, name: 'Dana' })
        }, 1000)
    })
}

async function userInfo() {
    const user = await fetchUser()
    console.log(`User name: ${user.name}`);
}

// userInfo()

//2.4
function validateAge(age) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (age >= 18) {
                res(age)
            }
            rej('Too young')
        }, 500)
    })
}

// try {
//     const result = await validateAge(16)
//     console.log(result);
// }
// catch (error) {
//     console.error(error)
// }

//2.5
function getNumber(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(3)
        }, 400)
    })
}

function square(n){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(n * n)
        }, 400)
    })
}

async function calc() {
    const number = await getNumber()
    const result = await square(number)
    console.log(result);
}

//calc()

//2.6
function delay(ms){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('Hi')
        }, ms)
    })    
}

async function loop() {
    for (let i = 0; i < 3; i++) {
        const result = await delay(500)
        console.log(i + 1, result);
    }
}

// loop()

//2.7
function maybeFail(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if (Math.random() < 0.3){
                rej('Random error')
            }
            res('All good')
        }, 400)
    })
}

async function maybe() {
    try {
        const result = await maybeFail()
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// maybe()

//2.8
function p1(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('A')
        }, 300)
    })
}

function p2(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('B')
        }, 500)
    })
}

function p3(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res('C')
        }, 200)
    })
}

async function func() {
    const result = await Promise.all([p1(), p2(), p3()])
    console.log(result);
}

// func()

//2.9
async function getGreeting() {
    const result = await new Promise((res, rej)=>{
        setTimeout(()=>{
            res('Hello')
        }, 700)
    })
    return `Greeting: ${result}`
}

// getGreeting().then(result => {console.log(result)})

//2.10
function getUser(){
    return new Promise((res, rej)=>{
        res({id: 1, mane: 'Dana', age: 16})
    })
}

function ensureAdult(user){
    return new Promise((res, rej)=>{
        if (user.age < 18){
            rej('Not an adult')
        }
    })
}

async function checkAge() {
    const user = await getUser()
    try {
        const result = await ensureAdult(user)
        console.log(result);   
    } catch (error) {
        console.error(error);
    }
}

// checkAge()

