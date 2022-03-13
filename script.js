$(document).ready(function() {
    //form validation
    $("#form").submit(function(event) {
        let userName = $("input#name").val();
        let userMail = $("input#email").val();
        let userMessage = $("input#message").val();
        if (userName != "" && userMail != "" && userMessage != "") {
            alert(
                "Hello " +
                userName +
                ". Thank you for reaching out to us. We have received your feedback and will get back to you shortly."
            );
        } else {
            alert(
                "Invalid input! Please fill in your name and email address and leave a meesage."
            );
        }
        event.preventDefault();
    });

    //add hover effect on portfolio images
    $(".portfolioimg").hover(
        function() {
            $(".portfoliotext", this).slideToggle("slow");
        },
        function() {
            $(".portfoliotext", this).slideToggle("slow");
        });


    //toggle

    $("#design").click(function() {
        $("#design").hide();
        $(".wwd1").toggle();
        $(".wwd1").show();
    });
    $(".wwd1").click(function() {
        $(".wwd1").hide();
        $("#design").toggle();
        $("#design").show();
    });
    $("#development").click(function() {
        $("#development").hide();
        $(".wwd2").toggle();
        $(".wwd2").show();
    });
    $(".wwd2").click(function() {
        $(".wwd2").hide();
        $("#development").toggle();
        $("#development").show();
    });

});