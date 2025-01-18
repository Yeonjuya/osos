$(document).ready(function () {
   let lastScrollTop = 0; // 마지막 스크롤 위치 저장
    let isMenuOpen = false; // 메뉴가 열려 있는 상태를 추적

 // GNB 메뉴 hover 이벤트
 // GNB 영역 전체(depth2_bg 포함)에 대한 hover 처리
 $("#header").hover(
    function() { // mouseenter
        if (!isHovered) {
            isHovered = true;
            $(".depth2_bg").stop(true, true).slideDown(300);
            $(".body-overlay").stop(true, true).fadeIn(300);
            $("#header .util a").css("color", "#232323");
        }
    },
    function() { // mouseleave
        isHovered = false;
        $(".depth2_bg").stop(true, true).slideUp(300);
        $(".body-overlay").stop(true, true).fadeOut(300);
        $("#header .util a").css("color", "#ffffff");
    }
);

// 개별 GNB 메뉴 아이템 hover
$(".gnb > li").hover(
    function() {
        $(this).find(".depth2")
            .css("display", "flex")
            .stop(true, true)
            .fadeIn(300);
    },
    function() {
        $(this).find(".depth2")
            .stop(true, true)
            .fadeOut(300);
    }
);
    // 스크롤 이벤트
    $(window).scroll(function () {
        const scrollTop = $(this).scrollTop();

        if (!isMenuOpen) {
            // 메뉴가 열려있지 않을 때만 스크롤 이벤트 처리
            if (scrollTop > lastScrollTop) {
                // 스크롤 다운: 헤더 숨기기
                $("#header").addClass("on");
            } else {
                // 스크롤 업: 헤더 보이기
                $("#header").removeClass("on");
            }
        }

        // 스크롤 위치가 최상단이면 항상 헤더 표시
        if (scrollTop <= 0) {
            $("#header").removeClass("on");
        }

        lastScrollTop = scrollTop; // 마지막 스크롤 위치 업데이트
    }); 


    $(function () {
        var $header = $("#header"); //헤더를 변수에 넣기
        var $page = $("#best"); //색상이 변할 부분
        var $window = $(window);
        var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

        $window.resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
            pageOffsetTop = $page.offset().top;
        });

        $window.on('scroll', function () { //스크롤시
            var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
            $header.toggleClass('down', scrolled); //클래스 토글
        });
    });
});