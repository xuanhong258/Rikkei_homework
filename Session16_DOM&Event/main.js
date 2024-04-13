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
}

cards.forEach(card => {
    card.addEventListener("click", flipCard)
})