
// let cancelBtn = document.querySelector(".btn-danger");
// cancelBtn.onclick = (e) => {
//     e.preventDefault();

//     let confirm = window.confirm("Dữ liệu chưa được lưu bạn có muốn thoát???");
//     if(confirm){
//         e.target.href = 'listFilm.html';
//     }
// }
let listFilm = JSON.parse(localStorage.listFilm);

let addBtn = document.querySelector(".btn-primary");

addBtn.onclick = (e) => {
    
    e.preventDefault();
    let newFilm = {
        id : listFilm[listFilm.length -1].id + 1,
        image : document.getElementById("inputImage").getAttribute("src"),
        filmName : document.getElementById("inputFilmName").value,
        condition : document.getElementById("inputCondition").value,
        comingSoon : document.getElementById("inputCommingsoon").value,
        director : document.getElementById("inputDirector").value,
        time : document.getElementById("inputTime").value,
        episodes : document.getElementById("episodes").value,
        language : document.getElementById("language").value,
        yearOfProduction : document.getElementById("yearOfPublish").value,
        country : document.getElementById("country").value,
        genre : document.getElementById("genre").value,
        actor : document.getElementById("actor").value,
        like : document.getElementById("like").value,
        share : document.getElementById("share").value,
        like : document.getElementById("like").value,
        rating : document.getElementById("rating").value,
        numberOfRatings : document.getElementById("numberOfRating").value,
        description : document.getElementById("description").value,
    }

   let confirm = window.confirm("Bạn có muốn thêm mới phim này không???");
    if(confirm){
        listFilm.push(newFilm);
        alert("Đã thêm phim mới thành công!!!");
    }
    localStorage.listFilm = JSON.stringify(listFilm);
}