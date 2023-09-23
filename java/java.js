$(document).ready(function () {
    let operation = "";
    let result = $("#result");

    $(".number").click(function () {
        operation += $(this).text();
        result.val(operation);
    });

    $(".operator").click(function () {
        operation += $(this).text();
        result.val(operation);
    });

    $("#clear").click(function () {
        operation = "";
        result.val("");
    });

    $("#equals").click(function () {
        try {
            operation = eval(operation);
            result.val(operation);
        } catch (error) {
            result.val("Error");
            operation = "";
        }
    });

    // Cambio de modo oscuro
    $("#darkModeToggle").change(function () {
        $("body").toggleClass("dark-mode");
        $(".calculator").toggleClass("dark-mode");
        $(".number").toggleClass("dark-mode");
    });

    // Cambio de colores RGB
    $("#red, #green, #blue").on("input", function () {
        const red = $("#red").val();
        const green = $("#green").val();
        const blue = $("#blue").val();

        $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
        $(".calculator").css("background-color", `rgb(${255 - red}, ${255 - green}, ${255 - blue})`);
        $(".calculator").css("color", `rgb(${red}, ${green}, ${blue})`);
        $(".header h1").css("color", `rgb(${255 - red}, ${255 - green}, ${255 - blue})`);
        $(".screen").css("background-color", `rgb(${255 - red}, ${255 - green}, ${255 - blue})`);
        $(".screen").css("color", `rgb(${red}, ${green}, ${blue})`);
        $(".buttons button").css("background-color", `rgb(${red}, ${green}, ${blue})`);
        $(".buttons button").css("color", `rgb(${255 - red}, ${255 - green}, ${255 - blue})`);
        $(".buttons button:hover").css("background-color", `rgb(${red - 20}, ${green - 20}, ${blue - 20})`);
        $(".buttons button:hover").css("color", `rgb(${255 - red + 20}, ${255 - green + 20}, ${255 - blue + 20})`);
        $(".slider.round:before").css("background-color", `rgb(${255 - red}, ${255 - green}, ${255 - blue})`);
    });
});
