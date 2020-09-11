var loaded = false;

class Load {
    constructor() {
        console.log("load class was loaded");
        var cookie = document.cookie;
        if (cookie != null) {
            var cokArray = cookie.split(",");
            for (let x = 0; x < cokArray.length; x++){
                let key = cokArray[x].split("=")[0];
                switch(key) {
                    case "bankOwned":
                        bankOwned = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "refineryOwned":
                        refineryOwned = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "houseOwned":
                        houseOwned = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "factoryOwned":
                        factoryOwned = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "accumulatedIncome":
                        accumulatedIncome = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "accountBalance":
                        accountBalance = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "dept":
                        dept = parseInt(cokArray[x].split("=")[1]);
                        console.log(dept);
                        break;
                    case "arrested":
                        if(cokArray[x].split("=")[1] == "false") {
                            arrested = false;
                        }else {
                            arrested = true;
                        }
                        
                        break;
                    case "car":
                        if(cokArray[x].split("=")[1] == "false") {
                            car = false;
                        }else {
                            car = true;
                        }
                        
                        break;
                    case "house":
                        if(cokArray[x].split("=")[1] == "false") {
                            house = false;
                        }else {
                            house = true;
                        }
                        
                        break;
                    case "thugs":
                        if(cokArray[x].split("=")[1] == "false") {
                            thugs = false;
                        }else {
                            thugs = true;
                        }
                        
                        break;
                    case "lawyer":
                        if(cokArray[x].split("=")[1] == "false") {
                            lawyer = false;
                        }else {
                            lawyer = true;
                        }
                        
                        break;
                    case "moneyAtHand":
                        moneyAtHand = parseFloat(cokArray[x].split("=")[1]);
                        break;
                    case "bodyGuard":
                        if(cokArray[x].split("=")[1] == "false") {
                            bodyGuard = false;
                        }else {
                            bodyGuard = true;
                        }
                        
                        break;
                    case "loanLimit":
                        loanLimit = parseFloat(cokArray[x].split("=")[1]);
                        break;
                }
            }
            update();
        }else {
            initialise();
        }
        
    }
    static save () {
        var now = new Date();
        now.setMonth(now.getMonth() + 1);
        document.cookie = "bankOwned="+bankOwned+",refineryOwned="+refineryOwned+
                        ",houseOwned="+houseOwned+
                        ",factoryOwned="+factoryOwned+
                        ",accumulatedIncome="+accumulatedIncome+
                        ",accountBalance="+accountBalance+
                        ",dept="+dept+
                        ",loanLimit="+loanLimit+
                        ",arrested="+arrested+
                        ",car="+car+
                        ",house="+house+
                        ",thugs="+thugs+
                        ",lawyer="+lawyer+
                        ",moneyAtHand="+moneyAtHand+
                        ",bodyGuard="+bodyGuard+
                        ",expires"+now.toUTCString();
       console.log("Game progress saved");






    }
    
}