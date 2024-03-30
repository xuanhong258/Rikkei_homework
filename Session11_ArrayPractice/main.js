//--------------Bai 1----------------------------

// let numberIntegers = [1, 2, 3, -4, -5, 8, 9];

// let length = numberIntegers.length;

// numberIntegers.sort();

// console.log(`Gia tri nho nhat la: ${numberIntegers[0]}`);

// console.log(`Gia tri lon nhat la: ${numberIntegers[length - 1]}`);

//--------------Bai 2----------------------------

// let a = +prompt("Please enter integer number a in blank box");
// let b = +prompt("Please enter integer number b in blank box");

// let newArray = [];

// if (!isNaN(a) && Number.isInteger(a) && !isNaN(b) && Number.isInteger(b)) {
//   if (a < b) {
//     for (let i = a + 1; i < b; i++) {
//       newArray.push(i);
//     }
//     console.log(newArray);
//   } else if (a > b) {
//     for (let i = b + 1; i < a; i++) {
//       newArray.push(i);
//     }
//     console.log(newArray);
//   } else {
//     console.log(newArray.push(a));
//   }
// } else {
//   console.log("Value is not correct!!!");
// }

//----------------Bai 3----------------------------

// let numberIntegers = [1, 2, 3, 4, 5, 8, 9];

// let newArray = [];

// let length = numberIntegers.length;

// for (let i of numberIntegers) {
//   if (i % 2 === 0) {
//     newArray.push(i);
//   }
// }
// console.log("Mang moi la: ", newArray);
// console.log(`Mang moi la: ${newArray}`);

//----------------Bai 4----------------------------

// let numberIntegers = [1, 2, 3, 4, 5, 8, 9];

// let newArray1 = [];

// let newArray2 = [];

// let length = numberIntegers.length;

// for (let i of numberIntegers) {
//   if (i % 2 === 0) {
//     newArray1.push(i);
//   } else {
//     newArray2.push(i);
//   }
// }

// console.log("Mang chan la: ", newArray1);
// console.log("Mang le la: ", newArray2);

// console.log(`Mang chan la: ${newArray1}`);
// console.log(`Mang le la: ${newArray2}`);

//----------------Bai 5----------------------------

// let numberIntegers = [1, 2, 1, 2, 3, 4, 5, 8, 9];
// let tmp = [];
// let length = numberIntegers.length;

// let newArray = [];
// let isCheck = false;
// for (let i = 0; i <= length - 1; i++) {
//   tmp[i] = 0;
// }

// for (let i = 0; i <= length - 1; i++) {
//   tmp[numberIntegers[i]]++;
// }

// for (let i = 0; i <= length - 1; i++) {
//   if (tmp[numberIntegers[i]] === 1) {
//     console.log(numberIntegers[i]);
//     break;
//   }
// }

//----------------Bai 6----------------------------

// let numberIntegers = [1, 2, 6, 7, 3, 4, 5, 8, 9];
// let randomIndex = Math.floor(Math.random() * numberIntegers.length);
// let tmp = [];
// let newArray = [];
// while (tmp.length < numberIntegers.length) {
//   if (tmp.indexOf(randomIndex) === -1) {
//     tmp.push(randomIndex);
//   }
//   randomIndex = Math.floor(Math.random() * numberIntegers.length);
// }

// for (let i = 0; i <= numberIntegers.length - 1; i++) {
//   newArray.push(numberIntegers[tmp[i]]);
// }

// console.log(newArray);

//----------------Bai 7----------------------------

// let input = prompt("Please enter in blank box");

// function arrayChild(input) {
//   let tmp = [];
//   for (let i = 0; i <= input.length; i++) {
//     for (let j = i + 1; j <= input.length; j++) {
//       tmp.push(input.slice(i, j));
//     }
//   }
//   return tmp;
// }

// console.log(arrayChild(input));

//----------------Bai 8----------------------------

// let arrayInput = [1, 2, 1, 3, 2, 4, "f"]; //[2, 1, 3, 4, 'f']

// function arrayChild(arrayInput) {
//   for (let i = 0; i < arrayInput.length - 1; i++) {
//     for (let j = i + 1; j < arrayInput.length - 1; j++) {
//       if (arrayInput[i] === arrayInput[j]) {
//         arrayInput.splice(i, 1);
//       }
//     }
//   }
//   return arrayInput;
// }

// console.log(arrayChild(arrayInput));

//----------------Bai 9----------------------------

// let numbers = [1, 2, 3, 4, 5];

// let newArr = numbers; // biến numbers & biến newArr cùng trỏ vào cùng 1 địa chỉ ô nhớ (biến numbers & biến newArr có cùng địa chỉ ô nhớ)

// newArr.push(8); // khi thay đổi giá trị tại ô nhớ của biến newArray thì cũng là thay đổi giá trị của ô nhớ biến numbers.

// let makeNewArray = JSON.parse(JSON.stringify(numbers));

// let makeNewArray = [...numbers];
// makeNewArray.push(9);
// console.log("makeNewArray", makeNewArray);

// console.log("newArr: ", newArr);

// console.log("newArr", numbers);

//----------------Bai 10----------------------------

let arrayInput = [1, 2, 1, 3, 4, 1, 3, 2, 6, 8, 9];

function arrayChild(arrayInput) {
  let newArray = [];
  for (let i = 0; i <= arrayInput.length - 1; i++) {
    if (newArray.indexOf(arrayInput[i]) === -1) {
      newArray.push(arrayInput[i]);
    }
  }

  return newArray;
}

console.log(arrayChild(arrayInput));
