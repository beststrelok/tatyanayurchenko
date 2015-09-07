$(document).ready(function() {

    $("#portfolio_grid").mixItUp();

    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });

    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({
        type:"inline",
        midClick: true
    });

    // $(".section_header").animated("fadeInUp", "fadeOutDown");

    // $(".animation_1").animated("flipInY", "fadeOutDown");
    // $(".animation_2").animated("fadeInLeft", "fadeOutDown");
    // $(".animation_3").animated("fadeInRight", "fadeOutDown");

    $(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
    $(".right .resume_item").animated("fadeInRight", "fadeOutDown");

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });

    $(".top_mnu ul a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".sandwich").toggleClass("active");
        $(".top_text").css("opacity", "1");
    }).append("<span>");

    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });

    $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".podrt_descr").attr("id", "work_" + i);
    });

    $("input, select, textarea").jqBootstrapValidation();

    $(".top_mnu ul a").mPageScroll2id();

});

$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p").animated("fadeInUp", "fadeOutDown");

});


$(document).ready(function() {
    var image_offset = $('.background_resume_img').offset().top;
    $(document).on("scroll", function(){

        if (window.scrollY > image_offset) {
            $('.background_resume_img').css({
                position: 'fixed',
                top     : '0',
            });
        } else {
            $('.background_resume_img').css({
                position: 'relative',
            });
        }
    });
});


/*
To top button 
   jQuery(".to-top").on("click", function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
*/

/*
    // if mobile - remove  parallax  and video background ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = jQuery(".content");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) {
        jQuery(".background-video").remove();
        jQuery('.grid-item-holder').attr("onclick","return true");      
    }    
}
*/