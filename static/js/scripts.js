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
                let sentimentText = '';
                let color;
                switch (response.sentiment) {
                    case 'LABEL_0':
                        color = `rgba(${response.score*255}, 0, 0, ${response.score})`;
                        break;
                    case 'LABEL_1':
                        color = `rgba(0, 0, ${response.score*255}, ${response.score})`;
                        break;
                    case 'LABEL_2':
                        color = `rgba(0, ${response.score*255}, 0, ${response.score})`;
                        break;
                }
                const sentimentLabels = {
                    "LABEL_0": "Negative",
                    "LABEL_1": "Neutral",
                    "LABEL_2": "Positive"
                };
                $("#sentiment").text(sentimentLabels[response.sentiment]);
                
                $("#tweet-text").text($("#text").val());
                $("#score").text(response.score.toFixed(2));
                $("#color-box").css("background-color", color);
                $("#result").removeClass("d-none");
            },
            error: function (error) {
                alert("Error: " + JSON.stringify(error));
            },
        });
    });
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
});
