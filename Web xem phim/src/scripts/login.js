let userAccount = JSON.parse(localStorage.userAccount);

let userName = document.getElementById("usernameInput");

let userPassword = document.getElementById("passwordInput");



let loginBtn = document.querySelector(".btn-submit");


loginBtn.onclick = () => {
    userAccount.forEach((user, index) => {
        user.status = false;
    });
    let isCheck = false;
    let position;
    userAccount.forEach((user, index) => {
        if(userName.value === user.userName && userPassword.value === user.userPassword){
            isCheck = true;
            position = index;
            user.status = true;
            localStorage.userAccount = JSON.stringify(userAccount);
        }
    });
    if(isCheck){
        window.location.href = `generalInterface.html?id=${userAccount[position].id}`;
        alert("Đăng nhập thành công!!!");
    }else{
        alert("Đăng nhập thất bại");
    }
}


function submit() {
    userAccount.forEach((user, index) => {
        user.status = false;
    });
    let isCheck = false;
    let position;
    userAccount.forEach((user, index) => {
        if(userName.value === user.userName && userPassword.value === user.userPassword){
            isCheck = true;
            position = index;
            user.status = true;
            localStorage.userAccount = JSON.stringify(userAccount);
        }
    });
    if(isCheck){
        window.location.href = `generalInterface.html?id=${position}`;
        alert("Đăng nhập thành công!!!");
    }else{
        alert("Đăng nhập thất bại");
    }
}