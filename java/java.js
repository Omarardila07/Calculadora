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
