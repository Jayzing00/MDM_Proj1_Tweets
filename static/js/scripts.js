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
                        sentimentText = 'Negative';
                        color = `rgba(${response.score*255}, 0, 0, ${response.score})`;
                        break;
                    case 'LABEL_1':
                        sentimentText = 'Neutral';
                        color = `rgba(0, 0, ${response.score*255}, ${response.score})`;
                        break;
                    case 'LABEL_2':
                        sentimentText = 'Positive';
                        color = `rgba(0, ${response.score*255}, 0, ${response.score})`;
                        break;
                }
                $("#sentiment").text(sentimentText);
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
