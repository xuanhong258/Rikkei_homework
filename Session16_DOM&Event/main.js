//--------------Bai 01-------------
// let inputElement = document.querySelector("input");

// let btn = document.querySelector("button");
// btn.onclick = () => {
//   if (inputElement.value.length > 10) {
//     alert("Không hợp lệ");
//   } else {
//     alert("Thành công");
//   }
// };

//--------------Bai 02--------------
// let btnOff = document.querySelector(".displayOff");
// let btnOn = document.querySelector(".displayOn");

// btnOff.onclick = () => {
//   btnOff.classList.toggle("display-none");
//   btnOn.classList.toggle("display-none");
// };

// btnOn.onclick = () => {
//   btnOn.classList.toggle("display-none");
//   btnOff.classList.toggle("display-none");
// };

//--------------Bai 03--------------

// let inputElement = document.querySelector("input");

// let displayWindow = document.querySelector(".display");

// inputElement.onchange = () => {
//   displayWindow.innerText = inputElement.value;
// };

// inputElement.onblur = () => {
//   displayWindow.innerText = inputElement.value;
// };

//--------------Bai 04--------------
// let input1 = document.querySelector(".input-1");
// let input2 = document.querySelector(".input-2");
// let input3 = document.querySelector(".input-3");

// input2.onchange = () => {
//   if (input2.value === "") {
//     input3.value = Number.parseInt(input1.value);
//   } else if (input1.value === "") {
//     input3.value = Number.parseInt(input2.value);
//   } else {
//     input3.value =
//       Number.parseInt(input1.value) + Number.parseInt(input2.value);
//   }
// };

// input1.onchange = () => {
//   if (input1.value === "") {
//     input3.value = Number.parseInt(input2.value);
//   } else if (input2.value === "") {
//     input3.value = Number.parseInt(input1.value);
//   } else {
//     input3.value =
//       Number.parseInt(input1.value) + Number.parseInt(input2.value);
//   }
// };

//--------------Bai 05--------------
// let storage = [
//   {
//     id: 1,
//     content: "Nho Mỹ",
//   },
//   {
//     id: 2,
//     content: "Táo tàu",
//   },
// ];

// let ul = document.querySelector("#ul");
// ul.innerHTML = `<ul></ul>`;

// let inputElement = document.querySelector("input");
// let btn = document.querySelector("button");

// function render() {
//   ul.innerHTML = "";
//   for (let value of storage) {
//     ul.innerHTML = ul.innerHTML + `<li>${value.content}</li>`;
//   }
//   inputElement.style.backgroundColor = "yellow";
// }

// render();

// inputElement.oninput = () => {
//   inputElement.style.backgroundColor = "white";
// };

// btn.onclick = () => {
//   let content = inputElement.value;
//   let obj = {
//     id: storage.length + 1,
//     content: content,
//   };
//   storage.push(obj);
//   inputElement.value = "";
//   render();
// };

//--------------Bai 06--------------
let students = [];
let idInput = document.querySelector(".input-id");
let nameInput = document.querySelector(".input-name");
let ageInput = document.querySelector(".input-age");
let phoneInput = document.querySelector(".input-phone");
let emailInput = document.querySelector(".input-email");

let btn = document.querySelector("button");

let output = document.querySelector(".output");

output.innerHTML = output.innerHTML + `<ul></ul>`;

function render() {
  output.innerHTML = "";
  for (let value of students) {
    output.innerHTML =
      output.innerHTML +
      `
    <li>Student Id : ${value.id}</li>
    <li>Student Name: ${value.name}</li>
    <li>Age: ${value.age}</li>
    <li>Phone: ${value.phone}</li>
    <li>Email: ${value.email}</li>
    `;
  }
  students = [];
}

btn.onclick = () => {
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
  if (idInput.value.length !== 6) {
    alert("Student Id phải gồm 6 ký tự");
    students = [];
  }
  if (nameInput.value === "") {
    alert("Không được để trống ô Student Name");
    students = [];
  }
  if (Number.parseInt(ageInput.value) < 18) {
    alert("Giá trị Age phải lớn hơn hoặc bằng 18");
    students = [];
  }
  if (!regexPhone.test(phoneInput.value)) {
    alert(
      "Số điện thoại nhập vào chưa đúng định dạng bắt đâu bằng số 0 hoặc chưa đủ 10 chữ số"
    );
    students = [];
  }
  if (!regexEmail.test(emailInput.value)) {
    alert("Trường nhập email chưa hợp lệ");
    students = [];
  }

  if (
    idInput.value.length === 6 &&
    nameInput.value !== "" &&
    Number.parseInt(ageInput.value) >= 18 &&
    regexPhone.test(phoneInput.value) &&
    regexEmail.test(emailInput.value)
  ) {
    let studentInfor = {
      id: idInput.value,
      name: nameInput.value,
      age: ageInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
    };
    students.push(studentInfor);

    render();
  }
};
//--------------Bai 07--------------
