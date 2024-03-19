//--------------------- Bài 1-------------------------
// let age = +prompt("Bạn sinh năm bao nhiêu?");

// if (age > 0) {
//   console.log("Số tuổi của bạn là: ", age);
// } else {
//   console.log("Giá trị bạn nhập không hợp lệ");
// }

//--------------------- Bài 2-------------------------

// let number = prompt("Vui lòng nhập vào số bất kì: ");

// if (isNaN(number)) {
//   console.log("Số nhập vào không hợp lệ");
// } else if (number % 2 === 0) {
//   console.log("Số " + number + " là số chẵn ");
// } else {
//   console.log("Số " + number + " là số lẻ ");
// }

//--------------------- Bài 3-------------------------

// let day = +prompt("Vui lòng nhập vào ngày trong tuần: ");

// switch (day) {
//   case 2:
//     console.log("Hôm nay là monday");
//     break;
//   case 3:
//     console.log("Hôm nay là tuesday ");
//     break;
//   case 4:
//     console.log("Hôm nay là wednesday ");
//     break;
//   case 5:
//     console.log("Hôm nay là thusday ");
//     break;
//   case 6:
//     console.log("Hôm nay là friday ");
//     break;
//   case 7:
//     console.log("Hôm nay là saturday ");
//     break;
//   case 8:
//     console.log("Hôm nay là sunday");
//     break;
//   default:
//     console.log("Giá trị nhập vào không hợp lệ");
//     break;
// }

//--------------------- Bài 4-------------------------

// let number = prompt("Vui lòng nhập vào số bất kì: ");

// console.log(
//   number >= 0 ? "Số " + number + " là số dương" : "Số " + number + " là số âm"
// );

//--------------------- Bài 5-------------------------

// let month = +prompt("Vui lòng nhập vào số tháng trong năm: ");

// switch (month) {
//   case 1:
//     console.log("Tháng 1 có 31 ngày");
//     break;
//   case 2:
//     console.log("Tháng 2 có 28 hoặc 29 ngày");
//     break;
//   case 3:
//     console.log("Tháng 3 có 31 ngày");
//     break;
//   case 4:
//     console.log("Tháng 4 có 30 ngày");
//     break;
//   case 5:
//     console.log("Tháng 5 có 31 ngày");
//     break;
//   case 6:
//     console.log("Tháng 6 có 30 ngày");
//     break;
//   case 7:
//     console.log("Tháng 7 có 31 ngày");
//     break;
//   case 8:
//     console.log("Tháng 8 có 31 ngày");
//     break;
//   case 9:
//     console.log("Tháng 9 có 30 ngày");
//     break;
//   case 10:
//     console.log("Tháng 10 có 31 ngày");
//     break;
//   case 11:
//     console.log("Tháng 11 có 30 ngày");
//     break;
//   case 12:
//     console.log("Tháng 12 có 31 ngày");
//     break;
//   default:
//     console.log("Giá trị nhập vào không hợp lệ");
//     break;
// }

//--------------------- Bài 6-------------------------

// let mathScore = +prompt("Nhập điểm môn Toán");
// let literatureScore = +prompt("Nhập điểm môn Văn");
// let englishScore = +prompt("Nhập điểm môn Anh");

// if (isNaN(mathScore) || isNaN(literatureScore) || isNaN(englishScore)) {
//   console.log("Dữ liệu nhập vào chưa chính xác");
// } else {
//   let avarageScores = (
//     (mathScore + literatureScore + englishScore) /
//     3
//   ).toFixed(1);

//   if (avarageScores >= 8.0 && avarageScores <= 10) {
//     console.log("Xếp loại GIỎI");
//   } else if (avarageScores >= 6.5 && avarageScores <= 7.9) {
//     console.log("Xếp loại KHÁ");
//   } else if (avarageScores >= 5.0 && avarageScores <= 6.4) {
//     console.log("Xếp loại TRUNG BÌNH");
//   } else {
//     console.log("Xếp loại YẾU");
//   }
// }

//--------------------- Bài 7-------------------------

// let a = +prompt("Nhập vào số a");
// let b = +prompt("Nhập vào số b");
// let c = +prompt("Nhập vào số c");

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   console.log("Dữ liệu nhập vào chưa chính xác");
// } else {
//   if (a > b && b > c) {
//     console.log('"Số lớn nhất là - ' + a + '"');
//   } else if (b > c && c > a) {
//     console.log('"Số lớn nhất là - ' + b + '"');
//   } else {
//     console.log('"Số lớn nhất là - ' + c + '"');
//   }
// }

//--------------------- Bài 8-------------------------

// let weight = +prompt("Nhập vào cân nặng(kg)");
// let heght = +prompt("Nhập chiều cao(m)");

// if (isNaN(weight) || isNaN(heght)) {
//   console.log("Dữ liệu nhập vào chưa chính xác");
// } else {
//   let bmi = (weight / Math.pow(heght, 2)).toFixed(1);

//   if (bmi < 18.5) {
//     console.log("Cân nặng thấp (gầy)");
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Bình thường");
//   } else if (bmi >= 25) {
//     console.log("Thừa cân");
//   } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("Tiền béo phì");
//   } else if (bmi >= 30 && bmi <= 34.9) {
//     console.log("Béo phì độ I");
//   } else if (bmi >= 35 && bmi <= 39.9) {
//     console.log("Béo phì độ II");
//   } else if (bmi >= 40) {
//     console.log("Béo phì độ III");
//   }
// }

//--------------------- Bài 9-------------------------

// let a = +prompt("Nhập vào số a");
// let b = +prompt("Nhập vào số b");
// let c = +prompt("Nhập vào số c");

// if (isNaN(a) || isNaN(b) || isNaN(c)) {
//   console.log("Dữ liệu nhập vào chưa chính xác");
// } else {
//   if (a > b && b > c) {
//     console.log("Thứ tự tăng dần các số là: " + c + "," + b + "," + a);
//   } else if (b > c && c > a) {
//     console.log("Thứ tự tăng dần các số là: " + a + "," + c + "," + b);
//   } else {
//     console.log("Thứ tự tăng dần các số là: " + a + "," + b + "," + c);
//   }
// }

//--------------------- Bài 10-------------------------
//------------------------------------------------------------------------------------------------------|
//                   |           Câu lệnh if else              |               Switch case              |
//-------------------|-----------------------------------------|----------------------------------------|                                       |
//Biểu thức kiểm tra |Có thể kiểm tra đồng thời nhiểu điều kiện|Kiểm tra so sánh giữa biểu thức và giá  |
//                   |hoặc nhiều giá trị                       |trị (case)                              |
//-------------------|-----------------------------------------|----------------------------------------|
//Trình tự code      |Thực thi câu lệnh này hoặc câu lệnh      |Thực thi các case đến khi kết thúc hoặc |
//                   |khác                                     |gặp break                               |
//-------------------|-----------------------------------------|----------------------------------------|

// Examples:
// let day = +prompt("Nhập vào số ngày: ");

if (isNaN(day)) {
  console.log("Dữ liệu nhập sai");
} else if (day === 2) {
  console.log("Hôm nay là thứ 2");
} else if (day === 3) {
  console.log("Hôm nay là thứ 3");
} else if (day === 4) {
  console.log("Hôm nay là thứ 4");
} else if (day === 5) {
  console.log("Hôm nay là thứ 5");
} else if (day === 6) {
  console.log("Hôm nay là thứ 6");
} else if (day === 7) {
  console.log("Hôm nay là thứ 7");
} else if (day === 8) {
  console.log("Hôm nay là thứ Chủ Nhật");
} else {
  console.log("Ngày nhập vào chưa chính xác");
}

switch (day) {
  case 2:
    console.log("Hôm nay là thứ 2");
    break;
  case 3:
    console.log("Hôm nay là thứ 3");
    break;
  case 4:
    console.log("Hôm nay là thứ 4");
    break;
  case 5:
    console.log("Hôm nay là thứ 5");
    break;
  case 6:
    console.log("Hôm nay là thứ 6");
    break;
  case 7:
    console.log("Hôm nay là thứ 7");
    break;
  case 8:
    console.log("Hôm nay là thứ Chủ Nhật");
    break;
  default:
    console.log("Ngày nhập vào chưa chính xác");
    break;
}
