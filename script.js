//form data validation
//let userForm = document.getElementById("form");
//let userName = document.getElementById("name");
//et userMail = document.getElementById("email");
//let userMessage = document.getElementById("message");$(document).ready(function() {
$(document).ready(function() {
            //form validation
            $("#form").submit(function(event) {
                        let userName = $("input#name").val();
                        let userMail = $("input#email").val();
                        let userMessage = $("input#message").val(