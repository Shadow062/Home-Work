// if (num < 49) {
//   console.log("Это не верно!")
// } else if (num > 100) {
//   console.log("Многовато будет")
// } else {
//   console.log("Верно!")
// };

// (num == 50) ? console.log("Верно!"): console.log("Это не верно!");

// switch (num) {
//   case num < 49:
//     console.log("Это не верно!");
//     break;
//   case num > 100:
//     console.log("Много");
//     break;
//   case num > 80:
//     console.log("Все ещё много");
//     break;
//   case 50:
//     console.log("Верно!");
//     break;
//   default:
//     console.log("Что-то пошло не так!");
//     break;
// }

// let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }


// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i <= 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);
// }

// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   num = 10;
//   console.log(num); // Если внутри функции переменной задан значение то в console выведется та переменная которая внутри функции, если внутри нет задданной переменной то в concole выведется во внешне находившияся переменна.
// }

// showFirstMessage("Hello World!");
// console.log(num); //В этом случае он возьмет переменную заданной вверху. Переменная находившияся внутри функции не найдет... Это называется Замыкание функции.

// console.log(calc(3, 4));

// console.log(calc(6, 3));

// function calc(a, b) { // function decloration - это когда если даже мы захотим вызвать ее то она с работает
// 	return (a + b);
// }

// console.log(calc(3, 4));

// console.log(calc(6, 3));

// let calk = function calc(a, b) {  //function Expretion - этот код будет работать только когда до него доходит...
// 	return (a + b);
// }

// let calk = (a, b) => a + b;


// function retVar() {
// 	let num = 50;
// 	return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);


// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// let twl = "12.2px";

// // console.log(Math.round(twl));

// console.log(parseInt(twl));
// console.log(parseFloat(twl));



let options = {
	width: 1024,
	height: 1024,
	name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
	border: "black",
	bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
	console.log("Свойство " + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];


// arr.pop();
// arr.push("5");
// arr.shift();
// arr.unshift("1");

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

/* arr.forEach(function (item, i, mess) {
	console.log(i + ': ' + item + " (массив: " + mess + ')');
})

console.log(arr);

let mass = [1, 3, 4, 6, 7];

for (let key of mass) { // of выводит именно значения массива
	console.log(key);
} */

// let ans = prompt("", ""),
// 	arr = [];


// arr = ans.split(',');
// console.log(arr)

// let arr = ["weqwe", "ewqeq", "qwrqwr"],
// 	i = arr.join(', ');

// console.log(arr);

let arr = [1, 24, 12, 53],
	i = arr.sort(compaNum);

function compaNum(a, b) { //для того что бы цифры по порядку построились надо CallBack function вызвать
	return a - b; //а для того что бы по алфавиту буквы выстроились, то без функции
}

console.log(arr);