$(document).ready(function () {
    
    $(".contactButton").click(() => {
        event.preventDefault();
        messageValidation();
        $("#name").val("")
        $("#email").val("")
        $("#message").val("")

    })


})