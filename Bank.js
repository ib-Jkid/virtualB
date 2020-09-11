var accountBalance;
var loanLimit;
var dept;
const bankChargesRate = 200;
const bankInterestRate = 0.18;
class Bank {
    constructor () {
        accountBalance = 0;
        loanLimit = 0;
        dept = 0;

    }
    static load() {
        $(document).ready (function () {
            var contentHtml = "<div class='bankLeftDiv'>";
                    contentHtml += "<p>Deposite: " +
                       "<select id='depositeAmount'>"+
                            "<option value = '50000'>$50,000</option>"+
                            "<option value = '100000'>$100,000</option>"+
                            "<option value = '150000'>$150,000</option>"+
                            "<option value = '200000'>$200,000</option>"+
                            "<option value = '250000'>$250,000</option>"+
                            "<option value = '500000'>$500,000</option>"+
                            "<option value = '1000000'>$1,000,000</option>"+
                       "</select>"+
                       "<button onclick='Bank.deposite()'>DEPOSITE</button> "+
                    
                    "</p>";
                    contentHtml += "<button onclick='Bank.fullDeposite()'>FULL DEPOSITE</button>";
                    contentHtml += "<p>Withdraw: " +
                       "<select id='withdrawAmount'>"+
                            "<option value = '50000'>$50,000</option>"+
                            "<option value = '100000'>$100,000</option>"+
                            "<option value = '150000'>$150,000</option>"+
                            "<option value = '200000'>$200,000</option>"+
                            "<option value = '250000'>$250,000</option>"+
                            "<option value = '500000'>$500,000</option>"+
                            "<option value = '1000000'>$1,000,000</option>"+
                       "</select>"+
                       "<button onclick='Bank.withdraw()'>WITHDRAW</button> "+
                    
                    "</p>";
                    contentHtml += "<button onclick='Bank.clearAccount()'>EMPTY ACCOUNT</button>";
                    contentHtml += "<p>Borrow: " +
                       "<select id='loanAmount'>"+
                            "<option value = '"+loanLimit/4+"'>$"+Math.round(loanLimit/4)+"</option>"+
                            "<option value = '"+loanLimit/2+"'>$"+Math.round(loanLimit/2)+"</option>"+
                            "<option value = '"+loanLimit+"'>$"+Math.round(loanLimit)+"</option>"+
                       "</select>"+
                       "<button onclick='Bank.getLoan()'>BORROW</button> "+
                    
                    "</p>";
                    
                    contentHtml += "<p>YOU OWE US $<span style='color: white;' id='bankDept'>"+dept+"</span> "+
                    "<button onclick='Bank.payDept()'>PAY LOAN</button></p>"

            contentHtml += "</div>";

            contentHtml += "<div class='bankRightDiv'>";
                contentHtml += "<img src='images/bank.jpeg' />";
                contentHtml += "<p>$ <span id ='bankAccountBalance'> "+accountBalance+"</span></p>";
            contentHtml += "</div>";
            contentHtml += "<p align='center' id='bankBoard'></p>";
            
            $("#content").html(contentHtml);
            update();
            console.log("done");
            
        })
    }
    static payDept () {
        /*************************************************************************
         * the pay dept method is called whenever the pay dept button is clicked
         * the if statement checks to see if the dept can be paid at once or part 
         * can be paid
         **************************************************************************/
        if(moneyAtHand >= dept) {
            moneyAtHand -= dept;
            dept = 0;
            console.log("dept has been paid");
        }
        else if(accountBalance >= dept) {
            accountBalance -= dept;
            dept = 0;
            console.log("dept has been paid");
        }else if(accountBalance < dept) {
            dept -= accountBalance;
            accountBalance = 0;
            if(moneyAtHand < dept) {
                dept -= moneyAtHand;
                moneyAtHand = 0;
            }else if (moneyAtHand >= dept) {
                moneyAtHand -= dept;
                dept = 0;
                console.log("dept has been paid");
            }

        }
        else {
            //the bankBoard is a p-tag that holds info the P should see
            $("#bankBoard").html("You Do not have enough money");
        }
        update();
        
    }
    static fullDeposite() {
        /******************************************
         * this function takes all the moneyAtHand and puts
         * into the accountBalance variable meaning full deposite
         * 
         */
        accountBalance += parseFloat(moneyAtHand);
        moneyAtHand = 0;
        Bank.bankCharge();
        update();
    }
    static clearAccount() {
        /************************************************
         * this performs the opposite of the full deposite
         * takes all the fund from the account and sends 
         * to the money at hand
         * 
         **************************************************/
        moneyAtHand += parseFloat(accountBalance);
        accountBalance = 0;
        Bank.bankCharge();
        update();

    }
    static deposite() {
        /*******************************************************
         * this function deposite the amount in the select tag
         */
        let select = document.getElementById("depositeAmount");
        let amount = select.options[select.selectedIndex].value;
        if(amount > moneyAtHand) {
            $("#bankBoard").html("INSUFICIENT CASH AT HAND");
        }else if(amount <= moneyAtHand) {
            moneyAtHand  -= parseFloat(amount);
            accountBalance  += parseFloat(amount);
            Bank.bankCharge();
            update();
            $("#bankBoard").html("You have Deposited $"+amount+" into your acount");
        }
    }
    static withdraw () {
         /*******************************************************
         * this function withdraw the amount in the select tag
         */
        let select = document.getElementById("withdrawAmount");
        let amount = select.options[select.selectedIndex].value;
        if(amount > accountBalance) {
            $("#bankBoard").html("INSUFICIENT FUND!!!");
        }else if (amount <= accountBalance) {
            moneyAtHand += parseFloat(amount);
            accountBalance -= parseFloat(amount);
            Bank.bankCharge();
            update();
            $("#bankBoard").html("You have Withdraw $"+amount+" from your acount");
        }
    }
    static getLoan() {
        /*****************************************************
         * collects the selected loan amount in the select tag
         */
        if(dept > 0) {
            $("#bankBoard").html("You have Outstanding Dept");
        }else if (dept == 0) {
            let select = document.getElementById("loanAmount");
            let amount = select.options[select.selectedIndex].value;
            accountBalance += parseFloat(amount);
            dept += parseFloat(amount) + (amount * bankInterestRate);
            Bank.bankCharge();
            update();
        }
        

    }
    static bankCharge () {
        /*************************************************
         * this function is called whenever a tax is performed 
         * in the bank
         */
        if (accountBalance >= bankChargesRate) {
            accountBalance -= bankChargesRate;
        }else if (accountBalance < bankChargesRate && moneyAtHand >= bankChargesRate) {
            moneyAtHand -= bankChargesRate;
            
        }else if (accountBalance < bankChargesRate && moneyAtHand < bankChargesRate) {
            dept += bankChargesRate;
        }
    }
    static addInterest () {
        /*******************************
         * this function is called by the update function whenever 
         * the game interval occurs to add interest to the dept owned 
         */
        dept += dept*bankInterestRate;
    }
}