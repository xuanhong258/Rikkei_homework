//---------------------Bai 1-----------

// function checkNumber(number) {
//   if (number % 2 === 0) {
//     console.log(`Số ${number} là số chẵn `);
//   } else {
//     console.log(`Số ${number} là số lẻ `);
//   }
// }

// let a = 3;
// checkNumber(a);
// let b = 2;
// checkNumber(b);
// let c = 4;
// checkNumber(c);

//---------------------Bai 2-----------
// let arr = ["a", "abcaaaa", "ab", "abcd"];
// function checkLength(arr) {
//   let max = 0;
//   let curr;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max) {
//       max = arr[i].length;
//       curr = arr[i];
//     }
//   }
//   return curr;
// }

// console.log(checkLength(arr));

//---------------------Bai 3-----------

// let strInput = "Toi la ai   reds ";

// function checkCharacter(str) {
//   let dem = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       dem++;
//     }
//   }
//   return str.length - dem;
// }

// console.log("So ki tu trong chuoi la: ", checkCharacter(strInput));

//---------------------Bai 4-----------

// let stringInput = prompt("Vui long nhap 1 chuoi bat ky");

// let characters = prompt("Vui long nhap 1 ky tu bat ky");

// function countCharacter(str, c) {
//   let dem = 0;
//   str.toLowerCase();
//   c.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === c) {
//       dem++;
//     }
//   }
//   return dem;
// }
// console.log(
//   `So lan xuat hien ki tu ${characters} la : ${countCharacter(
//     stringInput,
//     characters
//   )} lan`
// );

//---------------------Bai 5-----------

// let arr = [
//   "Toi la nguoi Viet Nam",
//   "nguoi Viet Nam",
//   "Toi la",
//   "nguoi",
//   "abxy",
//   "cabd",
// ];

// let stringInput = prompt("Vui long nhap 1 chuoi bat ky");

// function arrayChild(arr, str) {
//   let key = str.toLowerCase().split(" ");
//   let tmp = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < key.length; j++)
//       if (arr[i].toLowerCase().includes(key[j]) && tmp.indexOf(arr[i]) === -1) {
//         tmp.push(arr[i]);
//       }
//   }
//   return tmp;
// }
// console.log(arrayChild(arr, stringInput));
//--------------------Bai 6----------

let stringInput = "toi la nguoi viet nam";

function toLowerCaseFirstCharacter(stringInput) {
  let newString = stringInput.toLowerCase();
  let tmp = [];

  for (let i of newString) {
    tmp.push(i);
  }

  if (tmp[0].charCodeAt() >= 97 && tmp[0].charCodeAt() <= 122) {
    tmp[0] = tmp[0].toUpperCase();
  }
  for (let i = 1; i < tmp.length; i++) {
    if (tmp[i] === " ") {
      tmp[i + 1] = tmp[i + 1].toUpperCase();
    }
  }
  console.log(tmp.join(""));
}

toLowerCaseFirstCharacter(stringInput);

//--------------------Bai 7----------

// let arr = [1,2, -2 ,3,-4,5,6];

// let num = 0;

// function checkDouble(arr, num){
//     let newArr = [];
//     let sum = 0;
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             sum = arr[i] + arr[j];
//             if(sum === num){
//                 newArr.push(arr[i])
//                 newArr.push(arr[j]);
//                 num = undefined;
//             }
//         }
//     }
//     return newArr;
// }

// console.log(checkDouble(arr, num));

//--------------------Bai 8----------

// let str = "toi la nguoi viet nam";

// let input = prompt("Vui long nhap chuoi bat ki");

// function checkCreateString(str, input){
//     let keyWord = input.toLowerCase().split(" ");
//     for(let key of keyWord){
//         if(str.toLowerCase().includes(key)){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }
// if(checkCreateString(str, input)){
//     console.log("True");
// }else{
//     console.log("False");
// }

//--------------------Bai 9 ----------

//Callback function:
//- Là 1 function được truyền qua đối số khi gọi một hàm khác
//- Được gọi lại(trong hàm nhận đối số)

//- Được sử dụng:
//+ Xử lý đồng bộ trong Javascript
//+ Xử lý event

//--------------------Bai 10----------

let numInteger = [1, -1, 3, 2, -3, 4, 5];

let max_sum = numInteger[0];
let cur_sum = numInteger[0];
let start_idx = 0;
let end_idx = 0;
let cur_start_idx = 0;
let tmp = [];
for (let i = 1; i < numInteger.length; i++) {
  if (cur_sum <= 0) {
    cur_sum = numInteger[i];
    cur_start_idx = i;
  } else {
    cur_sum += numInteger[i];
  }

  if (cur_sum > max_sum) {
    max_sum = cur_sum;
    console.log(max_sum);
    start_idx = cur_start_idx;
    end_idx = i;
  }
}

console.log(numInteger.splice(start_idx, end_idx - start_idx + 1));
