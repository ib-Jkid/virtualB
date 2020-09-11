var refineryRate = 1.0;
var houseRate = 1.5;
var factoryRate = 1.5;
var bankRate = 1.5;
var refinerySellCost = 6000000;
var factorySellCost = 2100000;
var houseSellCost = 200000;
var bankSellCost = 700000;
var refineryIncome = 24000;
var houseIncome = 600;
var bankIncome = 2100;
var factoryIncome = 6300;
var refineryCost = 6000000;
var houseCost = 200000;
var bankCost = 700000;
var factoryCost = 2100000;
var cost = 300000;
//this variable was created recently
var currentWorth;
var bankOwned;
var refineryOwned;
var factoryOwned;
var houseOwned;
var accumulatedIncome;
var maxIncome = 100000;
var selectOption = "<option value='1'>1</option>"+
"<option value='2'>2</option>"+
"<option value='3'>3</option>"+
"<option value='4'>4</option>"+
"<option value='5'>5</option>"+
"<option value='6'>6</option>"+
"<option value='7'>7</option>"+
"<option value='9'>8</option>"+
"<option value='10'>10</option>";
/************************************
 * 
 * The Asset class holds all income generating 
 * facilities in the game 
 */
class Assets {
    constructor () {
        refineryOwned = 0;
        bankOwned = 0;
        factoryOwned = 0;
        houseOwned = 0;
        accumulatedIncome = 0;
    }
    static load() {
        /************************************
         * The load method loads the asset class to 
         * the screen
         */
        $(document).ready (function () {
            var contentHtml = "<div class='assetLeftDiv'>";
                contentHtml += "<div class='asset'>";
                    contentHtml += "<img src='images/house.jpeg' />"
                    contentHtml += "<p>Owned  : <span id='houseOwned'>"+houseOwned+"</span></p>";
                    contentHtml += "<p>Income  : $<span id='houseIncome'>"+houseIncome+"</span></p>";
                    contentHtml += "<p>Cost  : $<span id='houseCost'>"+houseCost+"</span></p>";
                    contentHtml += "<p><select id='houseNum'>"+
                                    selectOption+
                                    "</select>";
                    contentHtml += "<button onclick='Assets.buyHouse()'>BUY</button>";
                    contentHtml += "<button onclick='Assets.sellHouse()'>SELL</button></p>";
                contentHtml += "</div>";
                /////////////////////////////////////////////////////////////////////
                contentHtml += "<div class='asset'>";
                    contentHtml += "<img src='images/refinery.jpg' />"
                    contentHtml += "<p>Owned  : <span id='refineryOwned'>"+refineryOwned+"</span></p>";
                    contentHtml += "<p>Income  : $<span id='refineryIncome'>"+refineryIncome+"</span></p>";
                    contentHtml += "<p>Cost  : $<span id='refineryCost'>"+refineryCost+"</span></p>";
                    contentHtml += "<p><select id='refineryNum'>"+
                                    selectOption+
                                    "</select>";
                    contentHtml += "<button onclick='Assets.buyRefinery()'>BUY</button>";
                    contentHtml += "<button onclick='Assets.sellRefinery()'>SELL</button></p>";
                contentHtml += "</div>";
            contentHtml += "</div>";
            contentHtml += "<div class='assetRightDiv'>";
                contentHtml += "<div class='asset'>";
                    contentHtml += "<img src='images/factory.jpeg' />"
                    contentHtml += "<p>Owned  : <span id='factoryOwned'>"+factoryOwned+"</span></p>";
                    contentHtml += "<p>Income  : $<span id='factoryIncome'>"+factoryIncome+"</span></p>";
                    contentHtml += "<p>Cost  : $<span id='factoryCost'>"+factoryCost+"</span></p>";
                    contentHtml += "<p><select id='factoryNum'>"+
                                    selectOption+
                                    "</select>";
                    contentHtml += "<button onclick='Assets.buyFactory()'>BUY</button>";
                    contentHtml += "<button onclick='Assets.sellFactory()'>SELL</button></p>";
                contentHtml += "</div>";
                /////////////////////////////////////////////////////////////////////
                contentHtml += "<div class='asset'>";
                    contentHtml += "<img src='images/bank.jpeg' />"
                    contentHtml += "<p>Owned  : <span id='bankOwned'>"+bankOwned+"</span></p>";
                    contentHtml += "<p>Income  : $<span id='bankIncome'>"+bankIncome+"</span></p>";
                    contentHtml += "<p>Cost  : $<span id='bankCost'>"+bankCost+"</span></p>";
                    contentHtml += "<p><select id='bankNum'>"+
                                    selectOption+
                                    "</select>";
                    contentHtml += "<button onclick='Assets.buyBank()'>BUY</button>";
                    contentHtml += "<button onclick='Assets.sellBank()'>SELL</button></p>";
                contentHtml += "</div>";
            contentHtml += "</div>";
            contentHtml += "<div class='assetFarEnds' >";
               contentHtml += "<progress id= 'incomeProgressBar' min='0' max='"+maxIncome+"' value='"+accumulatedIncome+"'></progress>";
                contentHtml += "<img src='images/money.jpg' />";
                contentHtml += "<p>$<span id='accumulatedIncome'>"+accumulatedIncome+"</span></p>";
                contentHtml += "<button onclick='Assets.collectIncome()'>COLLECT</button>"
                contentHtml += "<p id='assetNoticeBoard'></p>";
            contentHtml += "</div>";
           
            /**************************
             * 
             ************************************************* 
             * the jquery syntax loads the contentHtml
             * to the main screen in the start.html
             *************************************************/
            $("#content").html(contentHtml);
            update();
            console.log("loaded the asset class");
            
        })
    }
    static alert(message) {
        /********************************
         * this fuction is used to print
         *  information on the asset page
         ***********************************/
        $("#assetNoticeBoard").html(message);
    }
    static buyHouse() {
        /*********************************************
         * this function is called when the Buy button 
         * under the house asset is clicked and the 
         * function collects the num of houses from the
         * select tag and cal the cost total using the 
         * house Cost variable************************
         * *******************************************
         * Inflation is added to the assest after purchase
         * based on the number of asset owned
         ********************************************/
        let select = document.getElementById("houseNum");
        let value = select.options[select.selectedIndex].value;
        let cost = houseCost * parseFloat(value);
        if(cost > moneyAtHand) {
            Assets.alert("INSUFICIENT FUND");
        }else if (cost <= moneyAtHand) {
            moneyAtHand -= cost;
            houseOwned += parseFloat(value);
            Assets.alert("SUCCESSFULL");
            houseCost += houseRate*cost/100;
            update();
        }

    }
    static buyFactory() {
        /*********************************************
         * this function is called when the Buy button 
         * under the factory asset is clicked and the 
         * function collects the num of factories from the
         * select tag and cal the cost total using the 
         * factory Cost variable************************
         * *******************************************
         * Inflation is added to the assest after purchase
         * based on the number of asset owned
         ********************************************/
        let select = document.getElementById("factoryNum");
        let value = select.options[select.selectedIndex].value;
        let cost = factoryCost * parseFloat(value);
        if(cost > moneyAtHand) {
            Assets.alert("INSUFICIENT FUND");
        }else if (cost <= moneyAtHand) {
            moneyAtHand -= cost;
            factoryOwned += parseFloat(value);
            Assets.alert("SUCCESSFULL");
            factoryCost += factoryRate* cost/100;
            update();
        }

    }
    static buyBank() {
        /*********************************************
         * this function is called when the Buy button 
         * under the bank asset is clicked and the 
         * function collects the num of bank from the
         * select tag and cal the cost total using the 
         * bank Cost variable************************
         * *******************************************
         * Inflation is added to the assest after purchase
         * based on the number of asset owned
         ********************************************/
        let select = document.getElementById("bankNum");
        let value = select.options[select.selectedIndex].value;
        let cost = bankCost * parseFloat(value);
        if(cost > moneyAtHand) {
            Assets.alert("INSUFICIENT FUND");
        }else if (cost <= moneyAtHand) {
            moneyAtHand -= cost;
            bankOwned += parseFloat(value);
            Assets.alert("SUCCESSFULL");
            bankCost += bankRate*cost/100;
            update();
        }
    }
    static buyRefinery () {
        /*********************************************
         * this function is called when the Buy button 
         * under the refinery asset is clicked and the 
         * function collects the num of refinery from the
         * select tag and cal the cost total using the 
         * refinery Cost variable************************
         * *******************************************
         * Inflation is added to the assest after purchase
         * based on the number of asset owned
         ********************************************/
        let select = document.getElementById("refineryNum");
        let value = select.options[select.selectedIndex].value;
        let cost = refineryCost * parseFloat(value);
        if(cost > moneyAtHand) {
            Assets.alert("INSUFICIENT FUND");
        }else if (cost <= moneyAtHand) {
            moneyAtHand -= cost;
            refineryOwned += parseFloat(value);
            Assets.alert("SUCCESSFULL");
            refineryCost += refineryRate*cost/100;
            update();
        }
    }

    static sellFactory () {
        /**************************************
         * the Opposite of the buy function
         * and also reduces the cost after sold
         * 
         ************************************/
        let select = document.getElementById("factoryNum");
        let value = parseFloat(select.options[select.selectedIndex].value);
        if(value <= factoryOwned) {
           
            if(factoryOwned > 0) {
                factoryCost -= factoryRate*cost/100;
            }
            factoryOwned -= value;
            moneyAtHand += value*2100000;
            update();
            Assets.alert("SUCCESSFULL");
        }else {
            Assets.alert("YOU DONT HAVE "+value+" HOUSES");
        }

    }
    static sellBank () {
         /**************************************
         * the Opposite of the buy function
         * and also reduces the cost after sold
         * 
         ************************************/
        let select = document.getElementById("bankNum");
        let value = parseFloat(select.options[select.selectedIndex].value);
        if(value <= bankOwned) {
           
            if(bankOwned > 0) {
                bankCost -= bankRate*cost/100;
            }
            bankOwned -= value
            moneyAtHand += value*700000;
            update();
            Assets.alert("SUCCESSFULL");
        }else {
            Assets.alert("YOU DONT HAVE "+value+" HOUSES");
        }
    }
    static sellRefinery () {
         /**************************************
         * the Opposite of the buy function
         * and also reduces the cost after sold
         * 
         ************************************/
        let select = document.getElementById("refineryNum");
        let value = parseFloat(select.options[select.selectedIndex].value);
        if(value <= refineryOwned) {
           
            if(refineryOwned > 0) {
                refineryCost -= refineryRate*cost/100;
            }
            refineryOwned -= value;
            moneyAtHand += value*6000000;
            update();
            Assets.alert("SUCCESSFULL");
        }else {
            Assets.alert("YOU DONT HAVE "+value+" REFINERIES");
        }
    }
    static sellHouse () {
         /**************************************
         * the Opposite of the buy function
         * and also reduces the cost after sold
         * 
         ************************************/
        let select = document.getElementById("houseNum");
        let value = parseFloat(select.options[select.selectedIndex].value);
        if(value <= houseOwned) {
           
            if(houseOwned > 0) {
                houseCost -= houseRate*cost/100;
            }
            houseOwned -= value;
            moneyAtHand += value*200000;
            update();
            Assets.alert("SUCCESSFULL");
        }else {
            Assets.alert("YOU DONT HAVE "+value+" HOUSES");
        }
    }
    static collectIncome() {
        /**************************************************************
         * every asset generates income 
         * and this is stored in the accumulated income 
         * variable and this is collected when this function is called
         * by a button********************
         * it transfers the accumulatedincome into the moneyAtHand
         **************************************************************/
        moneyAtHand += accumulatedIncome; 
        accumulatedIncome = 0;
        update();
    }
    static calCurrentWorth () {
        /**********************************
         * this function is called by the update class
         * to calculate the current worth of the P
         * by subtrating dept from assests
         */
        currentWorth = (factoryOwned*factorySellCost)+(houseOwned*houseSellCost)+
        (bankOwned*bankSellCost)+(refineryOwned*refinerySellCost)-dept;
        loanLimit = currentWorth;
    }
}

