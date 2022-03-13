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
                        ". Thank you for reaching out to us. We have received your feedback and will get back to you shortly.");
                } else {
                    alert("Invalid input! Please fill in your name and email address and leave a meesage.");
                }
                event.preventDefault();
            });

            //add hover effect on portfolio images
            $('.portfolioimg').hover(function() {
                $('.portfoliotext', this).slideToggle('slow');
            }, function() {
                $('.porttext', this).slideToggle('slow');
            });