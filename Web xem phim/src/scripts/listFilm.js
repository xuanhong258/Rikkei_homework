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


const listFilm =[
    {
        id: 1,
        image:'../src/assets/images/cong-anh-ma-chay.jpg',
        filmName: "CÕNG ANH MÀ CHẠY",
        condition: "Tập 5 Vietsub",
        comingSoon: "Tập 6 VIETSUB",
        director: "Boo Sung Chul, Yoon Jong Ho, Kim Tae Yeong",
        time: "60 phút / tập",
        episodes: "16 Tập",
        status: "Current movies",
        language: "Phụ đề Việt",
        yearOfProduction:2024,
        country: "Hàn Quốc",
        genre: "Tâm Lý - Tình Cảm, Hài Hước",
        actor: "Byeon Woo Seok, Kim Hye Yoon, Song Geon Hee, Lee Seung Hyub, Jung Young Joo, Sung Byung Sook",
        like: 318,
        share: 0,
        rating: 9.7,
        numberOfRatings: 90,
        description: `Cõng Anh Mà Chạy kể về câu chuyện tình cảm của cô nàng Im Sol và thần tượng của cô là Ryu Sun Jae,một ngôi sao K-Pop hàng đầu. 
        Bất ngờ du hành về thời gian 15 năm trước, Im Sol được gặp gỡ Sun Jae khi anh vẫn còn là học sinh trung học. 
        Kể từ đó, cô phải đối mặt với nhiều thử thách khó khăn để ngăn cản Sun Jae gặp phải kết cục bất hạnh trong tương lai.`
    },
    {
        id: 2,
        image:'../src/assets/images/tiem-chup-anh-ma-quai.jpg',
        filmName: "TIỆM CHỤP ẢNH MA QUÁI",
        condition: "Tập 12 Vietsub",
        comingSoon: "Tập 13 VIETSUB",
        director: "Song Hyun Wook",
        time: "60 phút / tập",
        episodes: "16 Tập",
        status: "Current movies",
        language: "Phụ đề Việt",
        yearOfProduction:2024,
        country: "Hàn Quốc",
        genre: "Tâm Lý - Tình Cảm, Kinh Dị - Ma",
        actor: "Joo Won, Kwon Na Ra, Yoo In Soo, Eum Moon Suk, Han Groo, Ahn Chang Hwan",
        like: 0,
        share: 0,
        rating: 8.6,
        numberOfRatings: 82,
        description: `Tiệm Chụp Ảnh Ma Quái kể về những câu chuyện ly kỳ xoay quanh một studio
        chỉ làm việc với người đã khuất được điều hành bởi nhiếp ảnh gia Seo Ki Joo và các cộng sự đặc biệt của anh ấy.`
    },
    {
        id: 3,
        image:'../src/assets/images/cap-nhi-tan-1944.jpg',
        filmName: "CÁP NHĨ TÂN 1944",
        condition: "Tập 8 Vietsub",
        comingSoon: "Tập 9 VIETSUB",
        director: "Trương Lê",
        time: "45 phút / tập",
        episodes: "Đang cập nhật",
        status: "Current movies",
        language: "Phụ đề Việt",
        yearOfProduction:2024,
        country: "Trung Quốc",
        genre: "Phiêu Lưu - Hành Động, Hình Sự - Chiến Tranh, Bí Ẩn - Siêu Nhiên",
        actor: "Tần Hạo, Dương Mịch, Vương Hạc Nhuận",
        like: 0,
        share: 0,
        rating: 8.3,
        numberOfRatings: 8,
        description: `Cáp Nhĩ Tân 1944 kể về năm 1944, Cáp Nhĩ Tân dưới sự cai trị phi pháp của Nhật Bản, 
        Tống Trác Văn, một đảng viên đóng giả làm cảnh sát tuần tra đường sắt, đã bị trưởng phòng Đặc vụ Quan Tuyết nhầm 
        là ân nhân cứu mạng của mình - thực ra là Tống Trác Vũ, anh sinh đôi thất lạc nhiều năm của Trác Văn. Trác Văn được 
        giao nhiệm vụ cao nhất là điều tra vụ việc quân đội Kanto của Trưởng phòng Asano Daigo đến Cáp Nhĩ Tân, và lợi dụng Quan Tuyết 
        để tiếp cận phòng Đặc vụ. Nhưng đột nhiên Tống Trác Vũ lại xuất hiện, đẩy Trác Văn vào tình thế khó lường. Quan Tuyết máu lạnh đa 
        nghi, tàn nhẫn và độc ác, còn Trác Vũ lại hành động bốc đồng, thường xuyên vô tình phá hỏng kế hoạch của Trác Văn. Dưới sự sắp xếp 
        của cấp trên, hai anh em mới cùng nhau hợp tác, che chở cho nhau, trải qua hàng loạt các cuộc thử thách, né tránh sự tranh giành 
        cấu xé lẫn nhau của đồng nghiệp trong phòng Đặc vụ, cuối cùng lấy được sự tin tưởng của Quan Tuyết và quan chức Nhật. 
        Trong thời gian một năm ngắn ngủi đó, những người dưới lòng đất đã vượt qua hàng ngàn khó khăn, tìm ra và ngăn chặn các hành 
        động bí mật của quân Nhật và Liên Xô, tìm ra các đặc vụ giả mạo tiềm ẩn trong Đảng, 
        đón nhận chiến thắng cuối cùng của cuộc chiến. Bộ phim sẽ được phát sóng trực tuyến trên IQIYI quốc tế (iQ.com).`
    },
    {
        id: 4,
        image:'../src/assets/images/dao-hai-tac.jpg',
        filmName: "ĐẢO HẢI TẶC",
        condition: "Tập 1101 Vietsub",
        comingSoon: "Tập 1102 Vietsub",
        director: "Konosuke Uda, Munehisa Sakai, Mamoru Hosoda",
        time: "25 phút / tập",
        episodes: "Đang cập nhật",
        status: "Current movies",
        language: "Phụ đề Việt",
        yearOfProduction: 1999,
        country: "Nhật Bản",
        genre: "Phiêu Lưu - Hành Động, Hoạt Hình, Hài Hước",
        actor: "Mayumi Tanaka, Kazuya Nakai, Hiroaki Hirata, Yuriko Yamaguchi, Akemi Okamura, Ikue Ootani, Kappei Yamaguchi, Kazuki Yao",
        like: 0,
        share: 0,
        rating: 8.2,
        numberOfRatings: 1862,
        description:`Đảo Hải Tặc - One Piece là chuyện về cậu bé Monkey D. Luffy do ăn nhầm Trái Ác Quỷ, bị biến thành người cao su và sẽ 
        không bao giờ biết bơi. 10 năm sau sự việc đó, cậu rời quê mình và kiếm đủ 10 thành viên để thành một băng hải tặc, biệt hiệu Hải 
        tặc Mũ Rơm. Khi đó của phiêu lưu tìm kiếm kho báu One Piece bắt đầu. Trong cuộc phiêu lưu tìm kiếm One Piece, băng Hải tặc mũ rơm 
        phải chiến đấu với nhiều băng hải tặc xấu khác cũng muốn độc chiếm One Piece và Hải quân của Chính phủ muốn diệt trừ hải tặc. 
        Băng Hải tặc Mũ Rơm phải trải qua biết bao nhiêu khó khăn, không lùi bước với ước mơ "Trở thành Vua Hải Tặc và chiếm được kho báu One Piece".`

    }
   
]


// localStorage.listFilm = JSON.stringify(listFilm);

let tbody = document.querySelector(".table tbody");

function render(){
    tbody.innerHTML = "";
    let listFilm = JSON.parse(localStorage.listFilm);
    for(let index in listFilm){
        let row = `<tr>
                        <td>${+index + 1}</td>
                        <td><img style="width:160px;height:200px" src="${listFilm[index].image}"></td>
                        <td>${listFilm[index].filmName}</td>
                        <td>${listFilm[index].condition}</td>
                        <td>${listFilm[index].comingSoon}</td>
                        <td>${listFilm[index].director}</td>
                        <td>${listFilm[index].time}</td>
                        <td>${listFilm[index].episodes}</td>
                        <td>${listFilm[index].status}</td>
                        <td>${listFilm[index].language}</td>
                        <td>${listFilm[index].yearOfProduction}</td>
                        <td>${listFilm[index].country}</td>
                        <td>${listFilm[index].genre}</td>
                        <td>${listFilm[index].actor}</td>
                        <td>${listFilm[index].like}</td>
                        <td>${listFilm[index].share}</td>
                        <td>${listFilm[index].rating}</td>
                        <td>${listFilm[index].numberOfRatings}</td>
                        <td>${listFilm[index].description.substring(0,100) + "..."}</td>
                        <td>
                            <button class="btn btn-danger" id="${listFilm[index].id}">Delete</button>
                            <a style="margin-top:10px;" href="listFilmDetail.html?id=${listFilm[index].id}" class="btn btn-secondary">View</a>
                        </td>
                      </tr> `;
        tbody.innerHTML += row;
    }
}

render();
tbody.onclick = (e) =>{
    if(e.target.classList.contains("btn-danger")){
        let confirm = window.confirm("Bạn có muốn xóa phim này không???");
        if(confirm){
            let index = listFilm.findIndex(el =>{
                return el.id === +e.target.id;
            })
            listFilm.splice(index,1);
            localStorage.listFilm = JSON.stringify(listFilm);
            render();
        }
    }
}

