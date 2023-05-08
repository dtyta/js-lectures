// // 1.Ви прийшли в Макдональдз з трьома друзями.
// Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburger = 4;
let fries = 1;

if(hamburger >=4 && fries >=1){
    console.log("Ми поїли")
} else{
    console.log("Ми йдемо в інше кафе")
}



// 2.Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
// Результат виводити в консоль.

 let price =1488;
 if(price >=1000 && price <=1900){
    console.log("значення ціни товару НЕ знаходиться між 1000 та 1900")
} else { 
    console.log("значення ціни товару знаходиться між 1000 та 1900")
}


// 3.Напишіть конструкцію if, що перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
// Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
// Результат виводити в консоль.

let price1 = 1488;
if(price1 >1000){
    console.log("значення ціни товару не знаходиться між 1000 та 1900")
} else if(price1 <1900){
    console.log("значення ціни товару не знаходиться між 1000 та 1900")
}

let price2 = 1900;
if (!(price2 >= 1000 && price2 <= 1900)) {
  console.log("значення ціни товару не знаходиться між 1000 та 1900");
} else{
    console.log("значення ціни товару знаходиться між 1000 та 1900")
}

// 4.За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let season = 4;
if(season === 1){
    console.log("Winter")
} else if (season === 2){
    console.log("Spring")
} else if (season === 3){
    console.log("Summer")
} else if (season === 4){
    console.log("Autumn")
} else{
    console.log("Error")
}

// 5.Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 10;
let b = 18;
let c = 21;

if( a < b && b > c && a < c){
 console.log("c середнє за значенням")
} else if(b > a && a > c && c < b){
    console.log("a середнє за значенням")
} else if(c > a && a < b && b < c){
    console.log("b середнє за значенням")
}else {
    console.log("Спробуйте ще")
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let day = 22;
switch(day){
    case 1: 
        console.log('Monday');
        break;
    case 2: 
        console.log('Tuesday');
        break;
    case 3: 
        console.log('Wednesday');
        break;
    case 4: 
        console.log('Thursday');
        break;  
    case 5: 
        console.log('Friday');
        break;
    case 6: 
        console.log('Saturday');
        break;
    case 7: 
        console.log('Sunday');
        break; 
    default:
        console.log('Invalid day of the week number');
        break;  
}

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let symbol = '*';
let x = 7;
let y = 3;
let z 

switch(symbol){
    case '+': z = x + y;
    console.log("z ="+z)
    break;
    case '-': z = x - y;
    console.log("z ="+z)
    break;
    case '*': z = x * y;
    console.log("z ="+z)
    break;
    case '/': z = x / y;
    console.log("z ="+z)
    break;
    default: z = 0;
    break;
}

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let text = 'Microsoft!';

console.log(text.replace(/[aeiouy]/gi, ''))


// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.

//     Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)


const obj = { "length": { "unit": "метрів", "value": 2000 }, "convert_to": "кілометра" };  

const convertTo = (obj) => {
  const countIn = obj.length.unit.length;

  const countOut = obj.convert_to.length;

  let count;
  let unit;
  let value;
  if (countIn > countOut) {
    count = countIn - countOut;
    value = obj.length.value / 1000;
    unit = obj.convert_to;
  } else if (countIn < countOut) {
    count = countOut - countIn;
    console.log(count);
    value = obj.length.value / 1000;
    unit = obj.convert_to;
  } else {
    value = obj.length.value;
    unit = obj.convert_to;
  }

  const result = { unit, value };
  return result
}

console.log(convertTo(obj));