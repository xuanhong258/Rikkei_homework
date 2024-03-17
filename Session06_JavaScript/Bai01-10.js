//--------------Bài 1-----------------
// alert("xin chao");

//--------------Bài 2-----------------

// var i = 10;
// console.log("Biến i = ",i);

// let f = 20.5;
// console.log("Biến f = ",f);

// var b = true;
// console.log("Biến b = ",b);

// var s = "Hà Nội";
// console.log("Biến s = ",s);

//--------------Bài 3-----------------

// var width = 10;

// var height = 20;

// document.write(width*height);

//--------------Bài 4-----------------

// confirm("Bạn đã đủ 18 tuổi chưa?");

//--------------Bài 5-----------------

// var a = Number(prompt("Nhập điểm môn Vật lý"));

// var b = Number(prompt("Nhập điểm môn Hóa học"));

// var c = Number(prompt("Nhập điểm môn Sinh học"));

// let sum = a + b + c;

// let avg = sum/3;

// console.log("Tổng điểm 3 môn là: ", sum);

// console.log("Điểm trung bình 3 môn là: ", avg);

//--------------Bài 6-----------------

// let celsius = Number(prompt("Nhập vào giá trị độ C"));

// let fahrenheit = 32 + (9*celsius)/5;

// console.log("Giá trọ độ F là: ",fahrenheit);

//--------------Bài 7-----------------

// const pi = Math.PI;

// var width = Number(prompt("Nhập vào chiều dài của hình chữ nhật"));

// var length = Number(prompt("Nhập vào chiều rộng của hình chữ nhật"));

// var diameter = Math.sqrt((Math.pow(width,2) + Math.pow(length,2)));

// var radius = diameter/2;

// var perimeter = 2*pi*radius;

// var acreage = pi*Math.pow(radius,2);

// console.log("Chu vi hình tròn là: ",perimeter);

// console.log("Diện tích hình tròn là: ",acreage);


//--------------Bài 8-----------------


// const pi = Math.PI;

// var radius = Number(prompt("Nhập vào bán kính hình tròn"));

// var perimeter = 2*pi*radius;

// var acreage = pi*Math.pow(radius,2);

// console.log("Chu vi hình tròn là: ",perimeter);

// console.log("Diện tích hình tròn là: ",acreage);


//--------------Bài 9-----------------

// let a = 5;

// let b = "5";

// console.log(a==b);// So sánh giá trị của a và b => trả về kết quả true (vì chuỗi "5" được chuyển thành số 5 trước khi việc so sánh được thực hiện)

// console.log(a===b);// So sánh giá trị và kiểu dữ liệu của a và b => trả về kết quả false(a và b bằng giá trị nhưng khác kiểu dữ liệu, a kiểu dữ liệu number, b là kiểu dữ liệu string)

// console.log(a!=b);// So sánh giá trị của a và b=> trả về kết quả false( a và b bằng nhau về giá trị, vì chuỗi "5" được chuyển thành số 5 trước khi việc so sánh được thực hiện)

// console.log(a!==b);// So sánh giá trị và kiểu dữ liệu của a và b => trả về kết quả true (a và b bằng giá trị nhưng khác kiểu dữ liệu, a kiểu dữ liệu number, b là kiểu dữ liệu string)


//--------------Bài 10-----------------

// let a = 6;

// let result = ++a + a + a++ + ++a + a;
// // 7 + 7 + 7 + 9 + 9
// console.log("Giá trị của biến a là:", a);

// console.log("Giá trị của biến result là: ", result);

// a++: gán giá trị của a trước sau đó mới tăng giá trị của biến a lên 1 đơn vị
// ++a: tăng giá trị của biến a lên 1 đơn vị trước sau đó mới gán trị của biến a
