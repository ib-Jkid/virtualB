function jailedSound () {
    audio.setAttribute("src","assets/siren.mp3");
    audio.play();
}
function successSound () {
    audio.setAttribute("src","assets/cheer.mp3");
    audio.play();
}
function bailSound() {
    audio.setAttribute("src","assets/jailed.mp3");
    audio.play();
}
function lostSound() {
    audio.setAttribute("src","assets/lost.mp3");
    audio.play();
}
$(document).ready(function () {
    $("button").click(function () {
        audio.setAttribute("src","assets/click.mp3");
        audio.play();
    });
});
