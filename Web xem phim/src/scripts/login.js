let userAccount = JSON.parse(localStorage.userAccount);

let userName = document.getElementById("usernameInput");

let userPassword = document.getElementById("passwordInput");



let loginBtn = document.querySelector(".btn-submit");


loginBtn.onclick = () => {
    let isCheck = false;
    let position;
    userAccount.forEach((user, index) => {
        if(userName.value === user.userName && userPassword.value === user.userPassword){
            isCheck = true;
            position = index;
        }
    });
    if(isCheck){
        window.location.href = `generalInterface.html?id=${position}`;
        alert("Đăng nhập thành công!!!");
    }else{
        alert("Đăng nhập thất bại");
    }
}


function submit() {
    let isCheck = false;
    let position;
    userAccount.forEach((user, index) => {
        if(userName.value === user.userName && userPassword.value === user.userPassword){
            isCheck = true;
            position = index;
        }
    });
    if(isCheck){
        window.location.href = `generalInterface.html?id=${position}`;
        alert("Đăng nhập thành công!!!");
    }else{
        alert("Đăng nhập thất bại");
    }
}