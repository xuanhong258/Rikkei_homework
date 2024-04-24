function openNav() {
    document.getElementById("mySidenav").style.display = "block";

    document.querySelector("span i:nth-child(2)").style.display = "block";

    document.querySelector("span i:first-child").style.display = "none";
}

function closeNav(){
    document.getElementById("mySidenav").style.display = "none";

    document.querySelector("span i:nth-child(2)").style.display = "none";

    document.querySelector("span i:first-child").style.display = "block";
}

let idFilm = window.location.search.split("=")[1];

let listFilm = JSON.parse(localStorage.listFilm);

let film = listFilm.find(el => {
    return el.id == idFilm;
})


document.getElementById("inputID").value = film.id;
document.getElementById("Image").setAttribute("src",`${film.image}`);
document.getElementById("inputFilmName").value = film.filmName;
document.getElementById("inputCondition").value = film.condition;
document.getElementById("inputCommingsoon").value = film.comingSoon;
document.getElementById("inputDirector").value = film.director;
document.getElementById("inputTime").value = film.time;
document.getElementById("episodes").value = film.episodes;
document.getElementById("language").value = film.language;
document.getElementById("yearOfPublish").value = film.yearOfProduction;
document.getElementById("country").value = film.country;
document.getElementById("genre").value = film.genre;
document.getElementById("actor").value = film.actor;
document.getElementById("like").value = film.like;
document.getElementById("share").value = film.share;
document.getElementById("like").value = film.like;
document.getElementById("rating").value = film.rating;
document.getElementById("numberOfRating").value = film.numberOfRatings;
document.getElementById("description").value = film.description;

let img = document.querySelector("form img");

let chooseFile = document.getElementById("inputImage");
chooseFile.onchange = () => {
  img.src = URL.createObjectURL(chooseFile.files[0]);
};

document.querySelector(".btn-primary").onclick = (e) => {
    e.preventDefault()
    let confirm = window.confirm("Bạn có muốn lưu lại thay đổi không?");

    let index = listFilm.indexOf(film);

    if(confirm){
        listFilm[index] = {
            ...listFilm[index],
            id : document.getElementById("inputID").value,
            image : `../src/assets/images/`.concat(
                document.getElementById("inputImage").value.split("\\")[2]
              ),
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

        localStorage.listFilm = JSON.stringify(listFilm);
        alert("Đã lưu thành công!!!");
    }
}

function notice() {
    let confirm = window.confirm("Bạn có muốn hủy bỏ thay đổi này không?");
    if(confirm){
        location.replace('listFilm.html');
    }
}
