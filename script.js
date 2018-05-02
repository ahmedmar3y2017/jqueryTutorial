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
    $("#fade").click(function () {
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

    // slide toggle
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    // animate button1
    $("#animateButton").on("click", function () {
        var div = $("#animated1");

        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
        div.animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'

        })
        div.animate({
            height: 'toggle'
        });

    });

    $("#stopAnimated").click(function () {
        $("#animated1").stop();
    });


    // chenge html
    $("#setVal").click(function () {
        $("#link").attr({
            "href": "https://www.w3schools.com/jquery/",
            "title": "W3Schools jQuery Tutorial"
        });
    });

    // change Label From Field
    $("#change_Label").on("click", function () {

        $("#label1").text($("#userName").val());


    });

    // append element

    $("#addToLabel").click(function () {
        $("#addlabel").append("<i>Mar3y</i>");

    });
    $("#addToList").click(function () {
        $("ol").append("<li>python</li>");

    })

    // --------- create elements with html , jquery , dom
    /*
    *
    *  var txt1 = "<p>Text.</p>";               // Create element with HTML
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    *
    * */


    $("#remove1").click(function () {

        $("#removedDiv1").remove();


    });
    $("#remove2").click(function () {
        $("#removedDiv2").remove();

    });
    $("#remove3").click(function () {
        $("#userName").remove();

    });

    // ---- add style Actions -------------
    $("#addstyle1").click(function () {
        $("p").addClass("blue");
        $("div").addClass("border");

    });
    $("#removestyle1").click(function () {
        $("p").removeClass("blue");
        $("div").removeClass("border");

    });

    $("span").parent().css({"color": "red", "border": "2px solid red"});

});

