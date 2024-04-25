function openNav() {
    document.getElementById("mySidenav").style.display = "block";
  
    document.querySelector("span i:nth-child(2)").style.display = "block";
  
    document.querySelector("span i:first-child").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
  
    document.querySelector("span i:nth-child(2)").style.display = "none";
  
    document.querySelector("span i:first-child").style.display = "block";
  }


  function openNavLogout(){
    document.querySelector('.options').style.display = 'block';
    document.querySelector('.log-out-icon i:nth-child(1)').style.display = 'none';
    document.querySelector('.log-out-icon i:nth-child(2)').style.display = 'block';
  }


  function closeNavLogout(){
    document.querySelector('.options').style.display = 'none';
    document.querySelector('.log-out-icon i:nth-child(1)').style.display = 'block';
    document.querySelector('.log-out-icon i:nth-child(2)').style.display = 'none';
  }



let nameAdmin = document.querySelector('.name-admin');

let index = window.location.search.split("=")[1];

let userAccount = JSON.parse(localStorage.userAccount);

nameAdmin.innerText = userAccount[index].userName;