$(document).ready(function() {
    // Change language text + resume
    $("#nav-home").css('color', '#A9A9A9');

    // $(".select-language").click(function() {
    //     if ($(".language").text() == 'EN') {
    //         $(".flag").attr("src", "img/il.svg");
    //         $(".language").text("HE");
    //         $("#title").text("Hi. I'm Haim.");
    //         $("#skills").text("Software Developer, Freelance");
    //         $("#details").text("Click here and checkout my resume!");
    //         $(".button").attr("onClick", "window.open('docs/resume-en.pdf');")
    //     } else {
    //         $(".flag").attr("src", "img/us.svg");
    //         $(".language").text("EN");
    //         $("#title").text(".שלום. שמי חיים");
    //         $("#skills").text("מפתח תוכנה, פרילנס");
    //         $("#details").text("!לחצו כאן לקורות חיים");
    //         $(".button").attr("onClick", "window.open('docs/resume-he.pdf');")
    //     }
    // });

    if ($(window).width() > 990) {
        $("#nav-projects").click(function() {
            $("#nav-projects").css('color', '#A9A9A9');
            $("#nav-home").css('color', '#0275d8');
            $right = document.getElementById('profile-container').style.right;
            if ($right != '36%') {
                $("#profile-container").css({
                    'right': '',
                    'left': ''
                }).animate({
                    'right': '36%',
                    'margin-left': '10px'
                });
                $("#project-container").fadeIn(900);
                $("#project-info").fadeIn(1200);
                $("#contact-btn").fadeIn(1200);
                $("#profile-info").fadeOut("fast");
                $("#banner-resume").slideDown();
            }
        });

        $("#nav-home").click(function() {
            $("#nav-home").css('color', '#A9A9A9');
            $("#nav-projects").css('color', '#0275d8');
            $right = document.getElementById('profile-container').style.right;
            $left = document.getElementById('profile-container').style.left;
            if ($left != '0%') {
                $("#profile-container").css({
                    'right': $right,
                    'left': $left
                }).animate({
                    'right': '0%',
                    'margin-left': '0px'
                });
                $("#project-info").hide();
                $("#contact-btn").hide();
                $("#project-container").hide("slide", function() { direction: "left"});
                $("#profile-info").fadeIn("1200");
                $("#banner-resume").slideUp();
            }
        });
    }
    else {
        $("#menu-btn").click(function() {
            $("#menu-slider").animate({width:'toggle'},350);
        });

        $("#slider-projects").click(function() {
            if ($("#menu-btn").hasClass("is-active")) {
                $("#menu-btn").removeClass("is-active");
            }
            else {
                $("#menu-btn").addClass("is-active");
            }
            $("#menu-slider").animate({width:'toggle'},350);
            // $left = document.getElementById('profile-container').style.left;
            // if ($left != '80%') {
            //     $("#profile-container").css({
            //         'right': '',
            //         'left': ''
            //     }).animate({
            //         'left': '80%'
            //     });
            // }
            $("#profile-container").hide("slide", function() { direction: "right"});
            $("#slider-projects > a").css('background-color', '#4EFFA1');
            $("#slider-projects > a").css('color', '#FFFFFF');
            $("#slider-home > a").css('background-color', '#FFFFFF');
            $("#slider-home > a").css('color', '#66C266');
            $("#project-container").fadeIn(900);
            // $("#project-container").attr("class", "container");
            $("#project-container").css({"min-width": "90%", "margin": "auto", "top": "60px"});
            $("#project-info").fadeIn(1200);
        });

        $("#slider-home").click(function() {
            $("#menu-slider").animate({width:'toggle'},350);
            if ($("#menu-btn").hasClass("is-active")) {
                $("#menu-btn").removeClass("is-active");
            }
            else {
                $("#menu-btn").addClass("is-active");
            }
            $right = document.getElementById('profile-container').style.right;
            $left = document.getElementById('profile-container').style.left;
            if ($left != '0%') {
                $("#profile-container").css({
                    'right': $right,
                    'left': $left
                }).animate({
                    'left': '0%'
                });
            }
            $("#profile-container").show("slide", function() { direction: "right"});
            $("#slider-home > a").css('background-color', '#4EFFA1');
            $("#slider-home > a").css('color', '#FFFFFF');
            $("#slider-projects > a").css('background-color', '#FFFFFF');
            $("#slider-projects > a").css('color', '#66C266');
            $("#project-container").hide();
            $("#project-info").hide();
        });

        $("#slider-resume, #slider-contact").click(function() {
            $("#menu-slider").animate({width:'toggle'},350);
            if ($("#menu-btn").hasClass("is-active")) {
                $("#menu-btn").removeClass("is-active");
            }
            else {
                $("#menu-btn").addClass("is-active");
            }
        });
    }
});
