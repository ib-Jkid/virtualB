var bodyGuard;
const bodyGuardPay = 20000;
class Station {
    constructor () {
        bodyGuard = false;
    }
    static load() {
        $(document).ready(function() {
            var contentHtml = "<div class='stationMain' >";
                contentHtml += "<div class='stationLeftDiv'>";
                    contentHtml += "<div>";
                        contentHtml += "<img src='images/bodyguard.jpg' />";
                        contentHtml += "<p><b>Hire a body Guard</b>"+
                                "<br />reduces your chance of getting robbed by 50%"+
                                "<br />hire at the rate of $20,000 per Month <br />this cannot be undone</p>";
                        contentHtml += "<button onclick='Station.hire();'>HIRE</button>";
                    contentHtml += "</div>";
                contentHtml += "</div>";

                contentHtml += "<div class='stationRightDiv'>";
                    contentHtml += "<p>Get bail at $100,000</p>";
                    contentHtml += "<button onclick='Station.bail();' >GET BAIL</button>";
                    contentHtml += "<p id='stationNoticeBoard'></p>";
                contentHtml += "</div>";
            contentHtml += "</div>";
            $("#content").html(contentHtml);
            update();
            console.log("done");
        });
    }
    static hire() {
        if(!bodyGuard) {
            bodyGuard = true;
        }else if (bodyGuard){
            bodyGuard = false;
        }
        update();
    }
    static bail() {
        if(arrested) {
            if(moneyAtHand >= 100000) {
                arrested = false;
                moneyAtHand -= 100000;
                $("#stationNoticeBoard").html("YOU HAVE BEEN GRANTED BAIL");
                bailSound();
            }else {
                $("#stationNoticeBoard").html("INSUFFICIENT FUND");
            }
        }else {
            $("#stationNoticeBoard").html("YOU ARE NOT IN JAIL");
        }
        update();
        
    }
}