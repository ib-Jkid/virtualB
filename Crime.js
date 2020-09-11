var arrested;
class Crime {
    /*******************************************************
     * the crime class contains crime that can be commited 
     * to earn cash in the game 
     *******************************************************/
    constructor () {
        arrested = false;
    }

    static load() {
        $(document).ready (function () {
            var contentHtml = "<div class='crimeLeftDiv'> ";
                contentHtml += "<div class='crime'>";
                    
                    contentHtml += "<img src='images/robber.png' />";
                    contentHtml += "<h1>THEFT</h1>";
                    contentHtml += "<p>Get involved in a theft but watch out for the cops"+
                                "<br/>this might cause you your FREEDOM!!!"+
                                "<br />Success Rate: 50%</p>";
                    contentHtml += "<button onclick = 'Crime.steal();'>$10,000</button>";
                contentHtml += "</div>";
                contentHtml += "<div class='crime'>";
                    
                    contentHtml += "<img src='images/gun.jpg' />";
                    contentHtml += "<h1>ROBBERY</h1>";
                    contentHtml += "<p>Get your guns rolling its about to get hot"+
                                "<br/>this might cause you your FREEDOM!!!"+
                                "<br />Success Rate: 30%</p>";
                    contentHtml += "<button onclick = 'Crime.rob();'>$70,000</button>";
                contentHtml += "</div>";
                contentHtml += "<div class='crime'>";
                    
                    contentHtml += "<img src='images/cheque.png' />";
                    contentHtml += "<h1>BANK FRAUD</h1>";
                    contentHtml += "<p>There is no room for mistakes"+
                                "<br/>this might cause you your FREEDOM!!!"+
                                "<br />Success Rate: 10%</p>";
                    contentHtml += "<button onclick = 'Crime.fraud();'>$150,000</button>";
                contentHtml += "</div>";

            contentHtml += "</div>";

            contentHtml += "<div class='crimeRightDiv'>";
                contentHtml += "<img src ='images/handcuff.png' />";
                contentHtml += "<p id='crimeNotice'>FREE</p>";
                contentHtml += "<p id='crimeNoticeBoard'><p>";
            contentHtml += "</div>";

            $("#content").html(contentHtml);
            update();
            console.log("done");
        });
    }
   
    static fraud () {
        /******************************************
         * the function is called when the fraud is commited
         * it checks if the rand is less than the chance
         * this is to create a lower probaility of success
         * *******************************************************
         * Same applies to all the remaining functions
         * 
         ******************************************/
        if(!arrested) {
            let rand = Math.floor((Math.random() * 100) + 1);
            let chance = 10;
            chance += (thugs)? 20 : 0;
            if (rand <= chance) {
                $("#crimeNoticeBoard").html("YOU PULLED IT OFF!!!");
                moneyAtHand += 150000;
                successSound();
            }else {
                arrested = true;
                $("#crimeNoticeBoard").html("BUSTED!!!");
                jailedSound();
            }

        }else {
            $("#crimeNoticeBoard").html("YOU ARE IN PRISON<br />GET OUT FIRST");
        }
        update();
    }
    static rob () {
        if(!arrested) {
            let rand = Math.floor((Math.random() * 100) + 1);
            let chance = 30;
            chance += (thugs)? 20 : 0;
            if (rand <= chance) {
                $("#crimeNoticeBoard").html("YOU PULLED IT OFF!!!");
                moneyAtHand += 70000;
                successSound();
            }else {
                arrested = true;
                $("#crimeNoticeBoard").html("BUSTED!!!");
                jailedSound();
            }

        }else {
            $("#crimeNoticeBoard").html("YOU ARE IN PRISON<br />GET OUT FIRST");
        }
        update();
    }
    static steal() {
        if(!arrested) {
            let rand = Math.floor((Math.random() * 100) + 1);
            let chance = 50;
            chance += (thugs)? 20 : 0;
            if (rand <= chance) {
                $("#crimeNoticeBoard").html("YOU PULLED IT OFF!!!");
                moneyAtHand += 10000;
                successSound();
            }else {
                arrested = true;
                $("#crimeNoticeBoard").html("BUSTED!!!");
                jailedSound();
            }

        }else {
            $("#crimeNoticeBoard").html("YOU ARE IN PRISON<br />GET OUT FIRST");
        }
        update();
    }
}