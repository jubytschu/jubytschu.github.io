$(document).ready(function() {
	$("a.blog-button").click(function() {
		if (location.hash && location.hash == "#blog") {
			return
		}
		if ($(".panel-cover").hasClass("panel-cover--collapsed")) {
			return
		}
		$(".main-post-list").removeClass("hidden");
		currentWidth = $(".panel-cover").width();
		if (currentWidth < 960) {
			$(".panel-cover").addClass("panel-cover--collapsed")
		} else {
			$(".panel-cover").css("max-width", currentWidth);
			$(".panel-cover").animate({
				"max-width": "320px",
				"width": "22%"
			}, 400, swing = "swing", function() {});
			$('.panel-cover').addClass('panel-cover--collapsed')
		}
	});
	if (window.location.hash && window.location.hash == "#blog") {
		$(".panel-cover").addClass("panel-cover--collapsed");
		$(".main-post-list").removeClass("hidden")
	}
	if (window.location.pathname.substring(0, 5) == "/tag/") {
		$(".panel-cover").addClass("panel-cover--collapsed")
	}
	$(".btn-mobile-menu__icon").click(function() {
		if ($(".navigation-wrapper").css("display") == "block") {
			$(".navigation-wrapper").on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
				$(".navigation-wrapper").toggleClass("visible animated bounceOutUp");
				$(".navigation-wrapper").off("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend")
			});
			$(".navigation-wrapper").toggleClass("animated bounceInDown animated bounceOutUp")
		} else {
			$(".navigation-wrapper").toggleClass("visible animated bounceInDown")
		}
		$(".btn-mobile-menu__icon").toggleClass("fa fa-list fa fa-angle-up animated fadeIn")
	})
});

$("#back-top").hide();
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$("#back-top").fadeIn()
		} else {
			$("#back-top").fadeOut()
		}
	});
	$("#back-top a").click(function() {
		$("body,html").animate({
			scrollTop: 0
		}, 800);
		return false
	})
});

$(document).ready(function() {
	var dateBegin = new Date("2015/01/03 23:15:15");
	var dateEnd = new Date();
	var dateDiff = dateEnd.getTime() - dateBegin.getTime();
	var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));
	var timeLeft = dateDiff % (24 * 3600 * 1000);
	var hours = Math.floor(timeLeft / (3600 * 1000));
	var time = dayDiff + "d " + hours + "h";
	$("#runtime").html(time)
});

var toc = document.querySelector(".post-toc");
function tocShow() {
	var clientHeight = document.documentElement.clientHeight;
	var clientWidth = document.documentElement.clientWidth;
	var tocWrapper = document.querySelector(".content-wrapper__inner");
	if (toc.clientHeight < clientHeight * 0.6 && tocWrapper.clientWidth > 750) {
		toc.style.visibility = "visible";
		if (toc.clientWidth < 100) {
			tocWrapper.style.marginRight = "160px"
		} else {
			tocWrapper.style.marginRight = 1.3 * toc.clientWidth + "px"
		}
		tocWrapper.style.marginLeft = "0px"
	} else {
		toc.style.visibility = "hidden";
		tocWrapper.removeAttribute("style")
	}
}
if ( !! toc) {
	window.addEventListener("resize", tocShow, false);
	tocShow()
};