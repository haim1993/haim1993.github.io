$(document).ready(function() {
    // Change language text + resume
    $("#nav-home").css('color', '#A9A9A9');

    $(".select-language").click(function() {
        if ($(".language").text() == 'EN') {
            $(".flag").attr("src", "img/il.svg");
            $(".language").text("HE");
            $("#title").text("Hi. I'm Haim.");
            $("#skills").text("Software Developer, Freelance");
            $("#details").text("Click here and checkout my resume!");
            $(".button").attr("onClick", "window.open('docs/resume-en.pdf');")
        } else {
            $(".flag").attr("src", "img/us.svg");
            $(".language").text("EN");
            $("#title").text(".שלום. שמי חיים");
            $("#skills").text("מפתח תוכנה, פרילנס");
            $("#details").text("!לחצו כאן לקורות חיים");
            $(".button").attr("onClick", "window.open('docs/resume-he.pdf');")
        }
    });

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
                $("#project-frame").fadeIn(900);
                $("#project-info").fadeIn(1200);
                $("#title, #skills, #details, #resume-btn").fadeOut("fast");

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
                $("#project-frame").fadeOut("fast");
                $("#title, #skills, #details, #resume-btn").fadeIn("fast");
            }
        });
    }
});
