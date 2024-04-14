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
// let students = [];
// let idInput = document.querySelector(".input-id");
// let nameInput = document.querySelector(".input-name");
// let ageInput = document.querySelector(".input-age");
// let phoneInput = document.querySelector(".input-phone");
// let emailInput = document.querySelector(".input-email");

// let btn = document.querySelector("button");

// let output = document.querySelector(".output");

// output.innerHTML = output.innerHTML + `<ul></ul>`;

// function render() {
//   output.innerHTML = "";
//   for (let value of students) {
//     output.innerHTML =
//       output.innerHTML +
//       `
//     <li>Student Id : ${value.id}</li>
//     <li>Student Name: ${value.name}</li>
//     <li>Age: ${value.age}</li>
//     <li>Phone: ${value.phone}</li>
//     <li>Email: ${value.email}</li>
//     `;
//   }
//   students = [];
// }

// btn.onclick = () => {
//   let regexEmail =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
//   if (idInput.value.length !== 6) {
//     alert("Student Id phải gồm 6 ký tự");
//     students = [];
//   }
//   if (nameInput.value === "") {
//     alert("Không được để trống ô Student Name");
//     students = [];
//   }
//   if (Number.parseInt(ageInput.value) < 18) {
//     alert("Giá trị Age phải lớn hơn hoặc bằng 18");
//     students = [];
//   }
//   if (!regexPhone.test(phoneInput.value)) {
//     alert(
//       "Số điện thoại nhập vào chưa đúng định dạng bắt đâu bằng số 0 hoặc chưa đủ 10 chữ số"
//     );
//     students = [];
//   }
//   if (!regexEmail.test(emailInput.value)) {
//     alert("Trường nhập email chưa hợp lệ");
//     students = [];
//   }

//   if (
//     idInput.value.length === 6 &&
//     nameInput.value !== "" &&
//     Number.parseInt(ageInput.value) >= 18 &&
//     regexPhone.test(phoneInput.value) &&
//     regexEmail.test(emailInput.value)
//   ) {
//     let studentInfor = {
//       id: idInput.value,
//       name: nameInput.value,
//       age: ageInput.value,
//       phone: phoneInput.value,
//       email: emailInput.value,
//     };
//     students.push(studentInfor);

//     render();
//   }
// };
//----------------------------Bai 07------------------------------

// let output = document.querySelector(".calculator-output");

// let numberInput = document.querySelectorAll(".number");

// let operatorInput = document.querySelectorAll("#operator");
// let nEqual = document.querySelector("#n-equal");

// let nAc = document.querySelector("#n-ac");

// function pressNum(){
//     for(let i = 0; i < numberInput.length; i++){
//         numberInput[i].onclick = () => {
//             if(output.innerText === "0"){
//                 output.innerText = numberInput[i].innerText;
//             }else{
//                 output.innerText += numberInput[i].innerText;
//             }
//         }
//     }
// }

// pressNum()

// function pressOperator(){
//     for(let i = 0; i < operatorInput.length; i++){
//         operatorInput[i].onclick = () => {
//             output.innerText += operatorInput[i].innerText;
//         }
//     }
// }

// pressOperator()


// nEqual.onclick = () => {
//     let exp = output.innerText;
//     let result;
//     result = eval(exp);
//     if(exp.includes("/")){
//         result = result.toFixed(3);
//     }

//     output.innerText = result;
// }


// nAc.onclick = () => {
//     output.innerHTML = "0";
// }

//----------------------------Bai 08------------------------------

// let nameLeft = document.querySelector(".content-left .content-row:nth-child(2) input")
// let emailLeft = document.querySelector(".content-left .content-row:nth-child(3) input")
// let phoneLeft = document.querySelector(".content-left .content-row:nth-child(4) input")
// let addressLeft = document.querySelector(".content-left .content-row:nth-child(5) input")
// let dayLeft = document.querySelector(".content-left .content-row:nth-child(6) input")
// let payLeft = document.querySelector(".content-left .content-row:nth-child(7) input")
// let checkboxLeft = document.querySelector(".content-left .content-checkbox input")

// //------Thông tin người nhận-----------
// let nameRight = document.querySelector(".content-right .content-row-right:nth-child(3) input");
// let emailRight = document.querySelector(".content-right .content-row-right:nth-child(4) input");
// let phoneRight = document.querySelector(".content-right .content-row-right:nth-child(5) input");
// let addressRight = document.querySelector(".content-right .content-row-right:nth-child(6) input");
// let checkboxRight = document.querySelector(".content-right .content-checkbox input")
// if(nameLeft.value === ""){
//     alert("Không được để trống họ và tên");
// }
// if(emailLeft.value === ""){
//     alert("Không được để trống email");
// }
// //Check phone

// let regexPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

// if(!regexPhone.test(phoneLeft.value)){
//     alert("Số điện thoại nhập chưa đúng định dạng")
// }
// if(phoneLeft.value === ""){
//     alert("Không được để trống ô số điện thoại");
// }

// //Check
// if(addressLeft.value === ""){
//     alert("Không được để trống ô địa chỉ");
// }
// if(dayLeft.value === ""){
//     alert("Không được để trống ô ngày đặt");
// }
// if(payLeft.value === ""){
//     alert("Không được để trống phương thức thanh toán");
// }
// //Check viết hoa họ và tên

// // if(nameLeft.value[0].charCodeAt() >= 97 && nameLeft.value[0].charCodeAt() <=122){
// //     alert("Phải viết hoa họ và tên");
// // }
// // let isCheck = false;
// // for(let i = 1; i < nameLeft.value.length; i++){
// //     if(nameLeft.value[i] === ' ' && nameLeft.value[i + 1].charCodeAt() >= 97 && nameLeft.value[i + 1].charCodeAt() <=122){
// //         isCheck = true;
// //     }
// // }

// let regexName = /^([A-Z][a-z]{1,})|(([A-Z][a-z]{1,}) ([A-Z][a-z]{1,}))$/;


// console.log(regexName.test("Hong"));
// // if(isCheck){
// //     alert("Phải viết hoa họ và tên");
// // }


// //Check email;

// let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// if(!regexEmail.test(emailLeft.value)){
//     alert("Trường nhập email chưa chính xác");
// }

// //Check day

// let regexDay = /(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[1,2])-(19|20)\d{2}/gm;

// if(!regexDay.test(dayLeft.value)){
//     alert("Ngày nhập chưa đúng định dạng");
// }
// //Check tôi là người nhận hàng
// checkboxRight.onclick = () => {
//     if(checkboxRight.checked){
//         nameRight.value = nameLeft.value;
//         emailRight.value = emailLeft.value;
//         phoneRight.value = phoneLeft.value;
//         addressRight.value = addressLeft.value; 
//     }else{
//         nameRight.value = "";
//         emailRight.value = "";
//         phoneRight.value = "";
//         addressRight.value = "";
//     }
// }



// let order = document.querySelector(".submit button:first-child");

// checkboxLeft.onclick = () => {
//     if(checkboxLeft.checked){
//         order.onclick = () => {
//             alert("Đặt hàng thành công, email đã gửi tới cho quý khách")
//         }
//     }else{
//         order.onclick = () => {
//             alert("Đặt hàng thành công");
//         }
//     }
// } 

// order.onclick = () => {
//     if(!checkboxLeft.checked){
//         alert("Đặt hàng thành công")
//     }
// }

// let inputAgain = document.querySelector(".submit button:last-child");

// inputAgain.onclick = () => {
//     nameLeft.value = "";
//     emailLeft.value = "";
//     phoneLeft.value = "";
//     addressLeft.value = "";
//     dayLeft.value = "";
//     payLeft.value = "";
// }


//--------------Bai 09--------------
let iconLeft = document.querySelector(".icon-left");
let iconRight = document.querySelector(".icon-button:last-child");

let imgList = document.querySelectorAll(".image-list span img");
let showImage = document.querySelector(".show-image-zoom img");

let tmpSrc = [];

for (let key of imgList) {
  tmpSrc.push(key.getAttribute("src"));
}
let i = 0;
imgList[0].style.opacity = 1;
iconRight.onclick = function moveRight() {
  if (i < tmpSrc.length) {
    showImage.setAttribute("src", `${tmpSrc[i + 1]}`);
    imgList[i + 1].style.opacity = 1;
    imgList[i].style.opacity = 0.5;
    i++;
  } else {
    i = 0;
    imgList[tmpSrc.length - 1].style.opacity = 0.5;
  }
};

let j = i;
iconLeft.onclick = function moveLeft() {
  if (j > 0) {
    showImage.setAttribute("src", `${tmpSrc[j - 1]}`);
    imgList[j].style.opacity = 0.5;
    imgList[j - 1].style.opacity = 1;
    j--;
  } else {
    j = tmpSrc.length - 1;
    showImage.setAttribute("src", `${tmpSrc[tmpSrc.length - 1]}`);
  }
  console.log(i);
};
//---------------------Bai 10-----------------------------

const cards = document.querySelectorAll(".card")

let cardOne, cardTwo;

function flipCard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
    }
    let cardOneImg = cardOne.querySelector("img");
    let cardTwoImg = cardOne.querySelector("img");

    matchCards(cardOneImg,cardTwoImg);
}

function matchCards(img1,img2){
        console.log(img1, img2);