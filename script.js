// to check Method is ready
$(document).ready(function () {

    $("#button1").on("click", function () {
        var name = $(this).text();
        console.log(name);
        if (name == "hide") {

            $("#test").hide(1000);
            $(this).text("show");

        } else {
            $("#test").show(1000);
            $(this).text("hide");

        }


    });


    // fade in / out
    $("button").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });


});

