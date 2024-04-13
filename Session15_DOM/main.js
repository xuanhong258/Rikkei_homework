//-----------------Bai 01------------------
// document.body.innerHTML = `
//     <li>List item number 1</li>
//     <li>List item number 2</li>
//     <li>List item number 3</li>
// `;

//-----------------Bai 02------------------

// let btn = document.getElementById("btn");

// btn.onclick = () => {
//   alert("Xin chào");
// };

//-----------------Bai 03------------------
// let btn = document.getElementById("btn");

// btn.onclick = () => {
//   document.querySelector("h1").innerText = "Text after change";
// };

//-----------------Bai 04------------------

// let btn = document.getElementById("btn");

// btn.onclick = () => {
//   document.querySelector("h1").style.backgroundColor = "yellow";
// };

//-----------------Bai 05------------------

// let names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

// let tmp = [];
// for (let value of names) {
//   tmp.push(`
//   <li>${value}</li>
//   `);
// }

// document.body.innerHTML = tmp.join("");

//-----------------Bai 06------------------
// let inputId = document.getElementById("input-id");

// let btn = document.getElementById("btn");

// let ul = document.querySelector("#list");

// let tmp = [];
// btn.onclick = () => {
//   tmp.push(`<li>${inputId.value}</li>`);
//   ul.innerHTML = tmp.join("");
// };
//--------------------Bai 07--------------------------------
let tableElement = document.querySelector("table");

let btn = document.querySelector("button");
let tmp = [
  `<tr>
        <td>Cell 1 row 1</td>
        <td>Cell 2 row 1</td>
        <td>Cell 3 row 1</td>
    </tr>`,
];
let i = 1;
let j = 2;
btn.onclick = () => {
  tmp.push(`
    <tr>
        <td>Cell ${i} row ${j}</td>
        <td>Cell ${i + 1} row ${j}</td>
        <td>Cell ${i + 2} row ${j}</td>
    </tr>
    `);
  j++;
  tableElement.innerHTML = tmp.join("");
};

//--------------------Bai 08--------------------------------
// let btnList = document.querySelectorAll("tr td button");

// let rows = document.querySelectorAll("tr");

// for(let i = 0; i < rows.length; i++ ){
//     btnList[i].onclick = () =>{
//         rows[i].style.display = "none";
//     }
// }

//--------------------Bai 09--------------------------------
// let inputElement = document.querySelector("input")
// let btnEditItem = document.querySelector("#edit-item")

// let btnList = document.querySelectorAll(".btn-edit");
// console.log(btnList);

// let liElements = document.querySelectorAll("li");

// console.log(liElements);

// for(let i = 0; i < liElements.length; i++ ){
//     btnList[i].onclick = () =>{
//         inputElement.value = liElements[i].innerText;
//         btnEditItem.onclick = () =>{
//             liElements[i].innerText = inputElement.value;
//         }
//     }
// }
//--------------------Bai 10--------------------------------

//--------------------innerText----------------------------
//Lấy ra nội dung là văn bản có trong 1 phần tử HTML,
//trích xuất toàn bộ kể cả bao nhiêu cấp HTML được lồng nhau

//--------------------textContent----------------------------
//Gần giống innerText nhưng nội dung lấy ra sẽ gồm cả các khoảng linebreak (xuống dòng)

//--------------------innerHTML----------------------------
// /Lấy ra toàn bộ nội dung là HTML có ở bên trong 1 phân tử HTML nào đó

// let div = document.querySelector("div");

// console.log(div.innerText);
// console.log(div.textContent);
// console.log(div.innerHTML);
