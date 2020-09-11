$(document).ready (function () {
    $("#main ul button").hover(function () {
        $(this).css("background-color","red");

    },function () {
        $(this).css("background-color","rgb(4, 4, 20)");
    });
    $("#noticeBoard").click(function () {
        $(this).hide();
    });
    
});
