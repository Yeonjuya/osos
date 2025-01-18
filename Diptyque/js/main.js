$(document).ready(function () {
    const holiday = new Swiper('.holiday', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },

    });

    $('.holiday').on('click', function () {
        holiday.slideNext();
    });

    $(".tab_img").hide(); // 모든 tab_img 숨김
    $(".tab_img").eq(0).show(); // 첫 번째 tab_img만 표시
    $(".tab_btn li").eq(0).addClass("active"); // 첫 번째 버튼 활성화

    // 탭 버튼 클릭 이벤트
    $(".tab_btn li").click(function () {
        // 클릭한 버튼의 인덱스 가져오기
        let index = $(this).index();

        // 버튼 활성화 상태 업데이트
        $(".tab_btn li").removeClass("active");
        $(this).addClass("active");

        // 해당 인덱스의 tab_img만 표시
        $(".tab_img").hide(); // 모든 tab_img 숨김
        $(".tab_img").eq(index).fadeIn(); // 해당 인덱스의 tab_img 표시
    });

    /* seletion */
    $('.sele_pin').click(function (e) {
        // 기존에 클릭된 다른 핀들의 클래스 제거
        $('.sele_pin').removeClass('clicked');
        // 현재 클릭한 핀에 clicked 클래스 추가
        $(this).addClass('clicked');
    });

    $(".prd-sidebar .prd_info").hide(); // 모든 prd_info 숨김

    $(".sele_pin").click(function () {
        let index = $(".sele_pin").index(this); // 클릭된 sele_pin의 index
        console.log("Clicked pin index: ", index);

        $(".prd-sidebar .prd_info").hide(); // 모든 prd_info 숨김
        $(".prd-sidebar .prd_info").eq(index).fadeIn(); // 해당 index의 prd_info 표시
        $(".prd-sidebar").addClass("active"); // 사이드바 활성화
    });
    $(".btn_close").click(function () {
        $(".prd-sidebar").removeClass("active");
        $(".prd-sidebar .prd_info").hide();
    });

    const candle_prd = new Swiper('.candle_prd', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1, // 한 번에 1개의 슬라이드만 보이도록 변경

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    $('.candle_prd').on('click', function () {
        candle_prd.slideNext();
    });

    const gift = new Swiper('.gift', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },

        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 20, // 한 번에 1개의 슬라이드만 보이도록 변경

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        loopAdditionalSlides: 0,
    });

});