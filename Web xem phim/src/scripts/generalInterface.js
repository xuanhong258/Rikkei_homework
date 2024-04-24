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