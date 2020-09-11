class Casino {
    constructor() {
        
    }
    static load() {
        $(document).ready (function () {
            var contentHtml = "<div class='casinoLeft'><p id='luckyNumber'></p>"+
                    "<img class='spiral' src='images/spiral.png' />"+
                    "</div>";
            contentHtml += "<div class='casinoRight' >";
                contentHtml += "<p>PICK A NUMBER: <select id='playNum'>";
                    contentHtml += "<option value='1'>1</option>"+
                        "<option value='2'>2</option>"+
                        "<option value='3'>3</option>"+
                        "<option value='4'>4</option>"+
                        "<option value='5'>5</option>"+
                        "<option value='6'>6</option>"+
                        "<option value='7'>7</option>"+
                        "<option value='8'>8</option>";


                contentHtml += "</select></p>";
                contentHtml += "<p>Stake Your Bet: <select id='payBet'>"+
                    "<option value = '50000'>$50,000</option>"+
                    "<option value = '100000'>$100,000</option>"+
                    "<option value = '150000'>$150,000</option>"+
                    "<option value = '200000'>$200,000</option>"+
                    "<option value = '250000'>$250,000</option>"+
                    "<option value = '500000'>$500,000</option>"+
                    "<option value = '1000000'>$1,000,000</option>"+
                    "</select></p>";

                contentHtml += "<button onclick='Casino.play()'>ROLL</button>";
                contentHtml += "<p id='luckyNum'></p>";
                contentHtml += "<pid='amountWL'></p>";
                contentHtml += "<p id='casinoNoticeBoard'>dklkdndnlkd</p>";
            contentHtml += "</div>";
           
            
            $("#content").html(contentHtml);
            update();
            console.log("done");
            
        })
    }
    static play () {
        /********************************************
         * the play method is called when the play button
         * is clicked, the function takes the lucky in the select
         * tag and compares it with a random number generated
         * to check for a win 
         **********************************************/
        let select = document.getElementById("playNum");
        let val = select.options[select.selectedIndex].value;

        let betSelect = document.getElementById("payBet");
        let betAmount = betSelect.options[betSelect.selectedIndex].value;

        let random = Math.floor(Math.random()*8)+1;
        let win = false;
        //if win = true then the money is awarded
        if(parseFloat(betAmount) <= moneyAtHand) {
            if(random == val) {
                win = true;
                moneyAtHand += parseFloat(betAmount) * 8;

            }else {
                win = false;
                moneyAtHand -= parseFloat(betAmount);
            }
            $(".spiral").toggleClass("flip");
            console.log(random);
            $("#luckyNumber").html(random);
            $("#luckyNumber").fadeIn(3000,function() {
                $("#luckyNumber").fadeOut(3000,function () {
                    $(".spiral").toggleClass("flip");
                    if(win) {
                        $("#casinoNoticeBoard").html("YOU WON!!!");
                        /********************************************
                         * the successSound() function is located in the soundPlay.js
                         * to play the sound
                         */
                        successSound();
                    }else {
                        $("#casinoNoticeBoard").html("YOU LOST KEEP TRYING");
                        lostSound();
                    }
                });
            } );
            update();
        } else {
            //displays on the casino page
            $("#casinoNoticeBoard").html("YOU DO NOT HAVE THAT AMOUNT OF MONEY");
        }
        

        
    }
}