/*
-------------------------------
1.Прості типи або примітивні
- string (текст)
- number (число)
- boolean (логічний тип. так/ні)
- null
- undefined
- symbol 
- bigint
---------------------------------

2. Об'єкти

- об'єкт {}
- масиви 
- об'єкт дати
- регулярні вирази
- Помилки (exeptions)
-----------------------------------------------
*/

let number = 5;

let floatNumber = 5.5;

// infinity, NaN

console.log(4/0);
console.log(-4/0);

console.log('string'*4);


// boolean

let isExist = true; //false

// null, undefined

console.log(qweqwe);

let value = null;
console.log(value);


let value2;
console.log(value2);

// object
let obj ={};

let person = {
    name: "Dmytro",
    age: 27
};

let person1 = new Object();
person1.name = "Dmytro2"
person1.age = 42

console.log(person);
console.log(person1);

//array
let arr = ['text', 'some text', 6, {name: 123}, []];
// console.log(arr);
console.log(arr[0]);
console.log(arr[5]);


let numArr = [1, 2, 3];

let numObj = {
    a:1, 
    b:2, 
    c:3
};

console.log(numArr[0]);
console.log(numObj.a);


let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let salaryArr = ['Anna', 1000, 'Vlada', 1200]

let someArrObj = {
    0: 'Anna',
    1: 1000,
    2: 'Vlada',
    3: 1200
}

console.log(salaryArr[0]);
console.log(someArrObj[0]);

let someArrObj2 = {
    a: 'Anna',
    b: 1000,
    c: 'Vlada',
    d: 1200
}
console.log(`b1: ${someArrObj2["b"]}`);

someArrObj2.b = 2000;

console.log(`b2: ${someArrObj2["b"]}`);


let someText = " Hello world!! ";

//console.log(someText.length);
//console.log(someText.substring(0, 6));
// console.log(someText.toUpperCase());
// console.log(someText.toLowerCase());
// console.log(someText.indexOf('o'));
// console.log(someText.trim());
// console.log(someText.charAt(5));
console.log(someText[1])

let myArr = [];

myArr.push("Доброго")
myArr.push("вечора")
console.log(myArr)
// console.log(myArr.length)
// console.log(myArr.join(" "))
console.log(myArr.pop())
console.log(myArr)

let newObj = {
    a: 1,
    b: 2,
    c: 'asdafqd'
}

console.log(newObj.a);
delete newObj.a
console.log(newObj);
console.log(newObj.c.length);

let someNum = 12.4;
console.log(Math.round(someNum));

let resolution = "12.2px"
console.log(parseInt(resolution));
console.log(parseFloat(resolution));