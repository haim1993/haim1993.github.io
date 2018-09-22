(function() {
    $('#myTab a').click(function (e) {
            e.preventDefault()
            var $this = $(this);
            if ($this.attr('href').includes('bio')) {
                // document.getElementById("bio").innerHTML = '<object type="text/html" data="views/bio.html"></object>';
                console.log("Contains Bio");
                // $('#bio').load('views/bio.html');
            }
            else {
                console.log("Contains Portfolio")
                // document.getElementById("portfolio").innerHTML = '<object type="text/html" data="views/portfolio.html"></object>';
                // $('#portfolio').load('views/portfolio.html');
            }
            // $(this).tab('show');

    });
})();
