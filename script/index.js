document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu_box .menu_sub a");
    const activeBg = document.querySelector(".active-bg");

    menuItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            menuItems.forEach(i => i.classList.remove("active"));
            item.classList.add("active");
            
            const left = parentLi.offsetLeft;
            const width = parentLi.offsetWidth;

            activeBg.style.left = `${left}px`;
            activeBg.style.width = `${width}px`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const topHd = document.querySelector('.top_hd');
    const triggerSection = document.querySelector('.dark-bg'); // 이 부분에서 흰색으로 전환
  
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            topHd.classList.add('white-text');
          } else {
            topHd.classList.remove('white-text');
          }
        });
      },
      {
        root: null,
        threshold: 0.1
      }
    );
  
    if (triggerSection) {
      observer.observe(triggerSection);
    }
  });

let swiperContainer = document.querySelector('.content_box')
let swiper = new Swiper('.content_box', {
    slidesPerView: 1,
    spaceBetween: 1,
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
    slidesPerView: '4',
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000, 
});
