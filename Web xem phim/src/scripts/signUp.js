
// localStorage.userAccount = JSON.stringify([]);

let userAccount = JSON.parse(localStorage.userAccount);


let userName = document.getElementById("usernameInput");

let userPassword = document.getElementById("passwordInput");

let userPasswordCheck = document.getElementById("passwordCheck");

let userEmail = document.getElementById("emailInput");



let submitBtn = document.querySelector(".btn-submit");


submitBtn.addEventListener('click',() =>{

    
    let userInfo = {
        id: userAccount.length > 0 ? userAccount[userAccount.length - 1].id + 1 : 1,
        userName: userName.value,
        userPassword: userPassword.value,
        userEmail: userEmail.value,
        status: false,
    };
    
    
    userAccount.push(userInfo);
    
    localStorage.userAccount = JSON.stringify(userAccount);

    window.location.href = 'login.html';
    
    alert("Đăng kí tài khoản thành công!!!");
    
})