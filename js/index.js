{
    var mySwiper = new Swiper ('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        direction: 'horizontal',
        loop: true,


        // 如果需要滚动条
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })

}








