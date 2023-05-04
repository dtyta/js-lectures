// Іменовані
// Не іменовані(анонімні)
// колбек функції


let a = 5;
let b = 3;
let c;

c = a + b;

console.log(c)


/// some code

a = 8;
b = 12;

c = a + b;
console.log(c);


function sum (a, b){
    let c = a + b;
    return c;
    console.log(c);
}

// let sumVar = sum(8, 12);

console.log(sum(8, 12));



// function (a, b){
//     let c = a + b;
//     console.log(c);
// }

const anonimFunc = function (a, b){
    let c = a + b;
    console.log(c);
}

anonimFunc(1,2);

let arrowFunc = (a, b) => {
    let c = a + b;
    console.log(c);
}

arrowFunc(1,2);


const funcWithDefaultParam = (a, b = 2) => {
    return (a * b)
}

console.log(funcWithDefaultParam(3, 5))
console.log(funcWithDefaultParam(3))


const myRequestWithDate = (field1, timestamp = Date()) => {

    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    }

    requestBody.someData = field1;
    requestBody.timestamp = timestamp;

    return requestBody;
    
}

console.log(myRequestWithDate('qweqwe', '839123709128730'))
console.log(myRequestWithDate('qweqwe'))


const playWithReturnFunc = () => {
    for(let i = 0; i < 8; i++){
        console.log(i);
        if(i === 6){
            return 'qweqew'
        }
    }
}

console.log(playWithReturnFunc());


function request1(){
    setTimeout(function(){
        console.log('First')
    }, 5000)
}

function request2 (){
    console.log('Second')
}

request1();
request2();


function someFunctionWithCallback(param1, qwe){
    console.log(`Here is my parameter: ${param1}`);
    qwe();
}

someFunctionWithCallback('parampaasd', function(){
    console.log('Text from callback')
})


function it (testDescription, testActions){
    console.log(`Here is my test description: ${testDescription}`);
    testActions();
}

it('Auth test', ()=> {
    console.log('Some test actions...')
})


