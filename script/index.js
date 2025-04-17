document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu_box .menu_sub");
    const activeBg = document.querySelector(".active-bg");

    menuItems.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            const itemCount = menuItems.length;
            const percent = 100 / itemCount;
            activeBg.style.left = `${index * percent}%`;
            activeBg.style.width = `${percent}%`;

            // 선택된 메뉴 표시 (선택사항)
            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
        });
    });
});

let swiperContainer = document.querySelector('.content_box')
let swiper = new Swiper('.content_box', {
    // 한 번에 보여줄 슬라이드 수
    slidesPerView: 1,
    // 슬라이드 사이의 간격
    spaceBetween: 1,
    // 한 번에 넘길 슬라이드 수
    slidesPerGroup: 1, 
    loop: true,
    autoplay:{delay: 7000,},
    centeredSlides : true,
})

let swiperContainer01 = document.querySelector('.content_box_02')
let swiper01 = new Swiper('.content_box_02', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000, 
});

let swiperContainer02 = document.querySelector('.content_box_03')
let swiper02 = new Swiper('.content_box_03', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000, 
});
