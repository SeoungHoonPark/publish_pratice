//메인슬라이드
$(document).ready(function(){

	// 20190104 추가 
	$('.slider2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			fade: true,
			autoplay: true,
			autoplaySpeed: 5000
	});

    //탭메뉴
    $(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active").css("color", "#424242");
        $(this).addClass("active").css("color", "#fa892f");
        $(".tab_content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
    // 메인 GNB
    $(".category_depth1 > li > p > a").on("mouseenter", function() {
        $(".category_depth1 > li > ul").hide();
        $(this).parent().next("ul").fadeIn("fast");
    });
    $(".category_depth1").on("mouseleave", function() {
        $(".category_depth1 > li > ul").hide();
    });

    // category in / out
    $(".sub_btn_category").on("mouseenter", function() {
        $(".category_depth1").show();
		$(".dim-menu-m").addClass("show");
    });
	 $(".btn_category").on("mouseenter", function() {
        $(".category_depth1").show();
		$(".dim-menu-m").addClass("show");
    });
    $(".gnb_category").on("mouseleave", function() {
        $(".category_depth1").hide();
		$(".dim-menu-m").removeClass("show");
    });

    // 메인 메뉴
    $(".gnb_depth1").on("mouseenter", function() {
        $(".gnb_depth2").slideDown(300);
    });
    $(".gnb_main").on("mouseleave", function() {
        $(".gnb_depth2").slideUp(300);
    });
	
	// 20181212 메인 카테고리 추가 
	$(".category_depth1 li.list:gt(9) ul.category_depth2").css("top","auto");
	$(".category_depth1 li.list:gt(9) ul.category_depth2").css("bottom","0px");

});

//레이어팝업
function layer_open() {
    $("#layer_popup").bPopup();
}

// 20181205 추가 
function product_layer_open() {
    $("#layer_popup01").bPopup();
}

// 20181205 추가 
function go_order() {
    $("#layer_popup01").bPopup().close();
    $("#layer_popup02").bPopup();
    $("#layer_popup02").focus();
}

//selec박스 웹접근성
function goUrl(f) {
    var url = f.url.value;
    if (!url) {
        alert('선택하세요!');
        return false;
    }
    f.action = url;
    return true;
}
