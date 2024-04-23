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


const listSubject = {
        seriesFilm : [
            {
                image:'../assets/images/Phim bộ/ookami-to-koushinryou-merchant-meets-the-wise-wolf.jpg',
                name: "OOKAMI TO KOUSHINRYOU: MERCHANT MEETS THE WISE WOLF",
            },
            {
                image:'../assets/images/Phim bộ/kho-tim.jpg',
                name:"KHÓ TÌM",
            },
            {
                image:'../assets/images/Phim bộ/mat-na-chan-tinh.jpg',
                name:"MẶT NẠ CHÂN TÌNH",
            },
            {
                image: '../assets/images/Phim bộ/tich-hoa-chi.jpg',
                name: "TÍCH HOA CHỈ",
            },
            {
                image: '../assets/images/Phim bộ/thua-hoan-ky.jpg',
                name: "THỪA HOAN KÝ",
            }
        ],
       
}

let tr = document.querySelector("table tbody tr");


function render(){
    tr.innerHTML = "";

    for(let key in listSubject){
        listSubject[key].forEach(element => {
            let row = `
                <td class="col-2">${element.name}</td>
            `
            tr.innerHTML += row;
        });
    }
                
    tr.innerHTML += `<td class="col-2"><a href="listFilmDetail.html" class="btn btn-primary">Detail</a></td>`;

}

render()