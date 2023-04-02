$(document).ready(function () {
    $("#sentiment-form").submit(function (event) {
        event.preventDefault();
        $.ajax({
            url: "/analyze",
            method: "POST",
            data: $(this).serialize(),
            beforeSend: function () {
                $("#result").addClass("d-none");
            },
            success: function (response) {
                $("#sentiment").text(response.sentiment);
                $("#score").text(response.score.toFixed(2));
                $("#result").removeClass("d-none");
            },
            error: function (error) {
                alert("Error: " + JSON.stringify(error));
            },
        });
    });
});
