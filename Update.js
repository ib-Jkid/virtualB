class Update {
    static start() {
        Update.updateAssets();
        Bank.addInterest();
        Assets.calCurrentWorth();
        Update.removeExpenditure();
        Update.gameCheck();
        Load.save();
        if(!gameOver){
            Chance.start();
        }else if(gameOver){
            Option.newGame();
            alert("gameover");
        }
        update();
    }
    static gameCheck () {
        let sum = accountBalance + moneyAtHand - dept + accumulatedIncome + 
        (factoryOwned*factorySellCost)+(houseOwned*houseSellCost)+
        (bankOwned*bankSellCost)+(refineryOwned*refinerySellCost);

        if (sum <= 0) {
            gameOver = true;
        }
    }
    static removeExpenditure () {
        let y = (thugs)? thugsPay : 0;
        console.log(thugs);
        console.log(y);
        console.log(bodyGuard);
        y += (bodyGuard)? bodyGuardPay : 0;
        console.log(y);
        console.log(lawyer);
        y += (lawyer)? lawyerPay : 0;
        console.log(y);
        if(moneyAtHand >= y) {
            moneyAtHand -= y;
        }
        else if(accountBalance >= y) {
            accountBalance -= y;
        }else {
            dept += y;
        }

    }
    static updateAssets() {
        let x = (houseIncome*houseOwned) + (factoryIncome*factoryOwned) + 
        (refineryIncome * refineryOwned) + (bankIncome * bankOwned);
        if(!arrested) {
            accumulatedIncome += x;
        }
         
    }
}
class Chance {
    static start () {
        var randNum = Math.floor((Math.random()*9)+1);
        switch(randNum) {
            case 1:
                Chance.getRobbed();
                break;
            case 2:
                Chance.getSued();
                break;
            case 3:
                Chance.getHospitalized();
                break;
            case 4:
                Chance.getDupped();
                break;
            case 5:
                Chance.payUtilities();
                break;
            case 6:
                Chance.payTax();
                break;
            case 7:
                Chance.visitRelatives();
                break;
            case 8:
                Chance.misplaceMoney();
                break;
            case 9:
                Chance.winLotto();
                break;
        }
    }
    static notice (header, body) {
        $("#noticeBoard").fadeIn(1000);
        $("#noticeBoard h1").html(header);
        $("#noticeBoard p").html(body);
        
    }
    static getRobbed() {
        let prob = (bodyGuard)? 50: 0;
        prob += (house)? 10: 0;
        prob += (car)? 10: 0;
        prob += (thugs)? 10: 0;
        let rand = Math.floor((Math.random()*100)+1);
        if(rand > prob) {
            Chance.notice("Oopss!!!","You have been robbed of $"+moneyAtHand+
            " i am just glad you made it out Alive");
            moneyAtHand -= moneyAtHand;
            console.log(prob);
            
            
        }else {
            moneyAtHand += 100;
            Chance.notice("Congratulations","You escaped a robbery and the men where caught"+
            " take $100 compensation");
            
        }
        
        update();
    }
    static getSued() {
        let prob = 50;
        prob += (lawyer)? 30 : 0;
        let rand = Math.floor((Math.random()*100)+1);
        console.log(prob);
        if(rand > prob) {
            Chance.notice("Oops!!!","You lost a law suit worth $100,000"+
            " hire a lawyer to win more cases");
            if(moneyAtHand >= 100000) {
                moneyAtHand -= 100000;
            }
            else if(accountBalance >= 100000) {
                accountBalance -= 100000;
            }else {
                dept += 100000;
            }
            
            
        }else {
            Chance.notice("Congratulation","You won a law suit worth $10000");
            moneyAtHand += 10000;
            
        }
        update();
    }
    static getHospitalized() {
        let prob = 20;
        let rand = Math.floor((Math.random()*100)+1);
        if(rand > prob) {
            Chance.notice("Get Well Soon","You fell sick and have been billed $1050");
            if(moneyAtHand >= 1050) {
                moneyAtHand -= 1050;
            }
            else if(accountBalance >= 1050) {
                accountBalance -= 1050;
            }else {
                dept += 1050;
            }

        }else {
            Chance.notice("Get Well Soon","Your Insurance company took care of the bill");
        }
        update();

    }
    static getDupped () {
        let prob = 50;
        let am = 10000;
        let rand = Math.floor((Math.random()*100)+1);
        if(rand > prob) {
            Chance.notice("OH Shit!!!","You have been dupped $5000");
            if(moneyAtHand >= am) {
                moneyAtHand -= am;
            }
            else if(accountBalance >= am) {
                accountBalance -= am;
            }else {
                dept += am;
            }

        }
        update();
    }
    static payUtilities () {
        let rand = Math.floor((Math.random()*3)+1);
        switch(rand) {
            case 1:
                Chance.notice("Pay Utilities","You are to pay electricity bill of $1000");
                if(moneyAtHand >= 1000) {
                    moneyAtHand -= 1000;
                }
                else if(accountBalance >= 1000) {
                    accountBalance -= 1000;
                }else {
                    dept += 1000;
                }
                break;
            case 2:
                Chance.notice("Pay Utilities","You are to pay water bill of $1500");
                if(moneyAtHand >= 1500) {
                    moneyAtHand -= 1500;
                }
                else if(accountBalance >= 1500) {
                    accountBalance -= 1500;
                }else {
                    dept += 1500;
                }
                break;
            case 3:
                Chance.notice("Pay Utilities","You are to pay internet bill of $2000");
                if(moneyAtHand >= 2000) {
                    moneyAtHand -= 2000;
                }
                else if(accountBalance >= 2000) {
                    accountBalance -= 2000;
                }else {
                    dept += 2000;
                }
                break;
        }
        update();
    }
    static payTax () {
        let cost = (refineryOwned*3000*refineryRate)+(factoryOwned*3000*factoryRate)+
                    (houseOwned*3000*houseRate)+(bankOwned*3000*bankRate);
        Chance.notice("TAX!!!","You are to pay tax on your assets worth $"+cost);
        if(moneyAtHand >= cost) {
            moneyAtHand -= cost;
        }
        else if(accountBalance >= cost) {
            accountBalance -= cost;
        }else {
            dept += cost;
        }
        update();
    }
    static visitRelatives() {
        Chance.notice("A Visit","A visti to your relative pay $1000");
        if(moneyAtHand >= 1000) {
            moneyAtHand -= 1000;
        }
        else if(accountBalance >= 1000) {
            accountBalance -= 1000;
        }else {
            dept += 1000;
        }
        update();
    }
    static misplaceMoney() {
        Chance.notice("I Kept It There...","You misplaced the sum of $10000");
        if(moneyAtHand >= 10000) {
            moneyAtHand -= 10000;
        }
        else if(accountBalance >= 10000) {
            accountBalance -= 10000;
        }else {
            dept += 10000;
        }
        update();
    }
    static winLotto() {
        Chance.notice("Hurray!!!","You won a lotto worth $5000");
        moneyAtHand += 5000;
        update();
    }
    /*static doSomething() {
        let rand = Math.floor((Math.random()*4)+1);
        switch(rand) {
            case 1:
                Chance.notice("Damn!!!","Your car broke down, pay $100");
                break;
            case 2:
                Chance.notice("Hurray!!!","You won a lotto worth $500");
                break;
            case 3:
                Chance.notice("Hurray!!!","You won a lotto worth $500");
                break;
            case 4:
                Chance.notice("Hurray!!!","You won a lotto worth $500");
                break;
        }
    }*/
}