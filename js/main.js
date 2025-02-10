$(document).ready(function () {
    const holiday = new Swiper('.holiday', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1, //모바일 초기값 설정
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        breakpoints: {
            768: {
                slidesPerView: 1,  //브라우저가 768보다 클 때
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1,  //브라우저가 1024보다 클 때
                spaceBetween: 20,
            },
        }
    });

    // 리사이즈 이벤트에서 Swiper 업데이트 호출
    $(window).resize(function () {
        holiday.update(); // Swiper를 업데이트
    });

    $('.holiday').on('click', function () {
        holiday.slideNext();
    });


    /* best sellers */
    $(".tab_btn li").click(function () {
        let index = $(this).index();

        $(".tab_btn li").removeClass("active");
        $(this).addClass("active");

        // 모든 탭 숨기고 선택한 탭만 표시 (absolute -> relative)
        $(".tab_img").css({
            position: "absolute",
            opacity: 0,
            visibility: "hidden",
            height: 0
        });

        $(".tab_img").eq(index).css({
            position: "relative",
            opacity: 1,
            visibility: "visible",
            height: "auto"
        });

        swipers[index].update();
    });

    // 첫 번째 탭 활성화
    $(".tab_btn li").eq(0).addClass("active");

    //mobile slide
    let bestSwiper = new Swiper(".bestSwiper", {
        slidesPerView: 1.4,
        spaceBetween: 20,
        loop: false,
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });


    // seletion
    $(".prd-sidebar").removeClass("active"); // 처음에 사이드바 숨김

    $(".sele_pin").click(function () {
        let index = $(".sele_pin").index(this); // 클릭된 sele_pin의 index
        console.log("Clicked pin index: ", index);

        $(".prd-sidebar").addClass("active"); // 사이드바 활성화

        // 클릭한 제품 정보로 스크롤 이동
        let targetOffset = $(".prd-sidebar .prd_info").eq(index).position().top;

        $(".prd-sidebar").animate({
            scrollTop: targetOffset
        }, 500);
    });

    $(".btn_close").hide(); //

    $(".sele_pin").click(function () {
        $(".prd-sidebar").addClass("active");
        $(".btn_close").fadeIn();
    });

    $(".btn_close").click(function () {
        $(".prd-sidebar").removeClass("active");
        $(".btn_close").fadeOut();
    });


    //canled_prd
    const candle_prd = new Swiper('.candle_prd', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 1, // 한 번에 1개의 슬라이드만 보이도록 변경
        navigation: {
            nextEl: ".swiper-button-next", //다음버튼
            prevEl: ".swiper-button-prev", //이전버튼
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });


    $('.candle_prd').on('click', function () {
        candle_prd.slideNext();
    });


    // gift
    const gift = new Swiper('.gift', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        slidesPerView: 2.5,
        spaceBetween: 20,
        loopAdditionalSlides: 0,
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });


    /* footer */
    const footers = document.querySelectorAll("#footer .footer_link dl");

    footers.forEach((footer) => {
        if (footer.classList.contains("FOLLOW US")) return; // FOLLOW US는 제외

        const title = footer.querySelector(".footer_title");

        title.addEventListener("click", function () {
            // 모든 메뉴 닫기 (현재 클릭한 요소 제외)
            footers.forEach((otherFooter) => {
                if (otherFooter !== footer && !otherFooter.classList.contains("FOLLOW US")) {
                    otherFooter.classList.remove("active");
                    otherFooter.style.maxHeight = "50px"; // 닫힘 상태 유지
                }
            });

            // 현재 클릭한 dl 활성화 토글
            footer.classList.toggle("active");

            // 활성화된 dl의 높이를 자동으로 조절
            if (footer.classList.contains("active")) {
                footer.style.maxHeight = footer.scrollHeight + "px";
            } else {
                footer.style.maxHeight = "50px"; // 닫힐 때 다시 축소
            }
        });
    });
});