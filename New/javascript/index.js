(function() {
    $('#myTab a').click(function (e) {
            e.preventDefault()
            var $this = $(this);
            $(this).tab('show');

    });
})();
