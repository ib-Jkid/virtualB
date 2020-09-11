var car;
var house;
var thugs;
var lawyer;
var lawyerPay = 15000;
var thugsPay = 10000;
class Expenses {
    constructor () {
    var car = false;
    var house = false;
    var thugs = false;
    var lawyer = false;
    }
    static load() {
        $(document).ready (function () {
            var contentHtml = "<div class='expensesLeftDiv'> ";
                contentHtml += "<div class='expenses'>";
                    
                    contentHtml += "<img src='images/home.jpg' />";
                    contentHtml += "<h1>BUY A HOUSE</h1>";
                    contentHtml += "<p>Put a roof over your head"+
                                "<br/>Reduces your chances of being robbed by 10%</p>";
                    contentHtml += "<button id='buyHouseButton' onclick = 'Expenses.buyHouse();'>$2,000,000</button>";
                contentHtml += "</div>";
                contentHtml += "<div class='expenses'>";
                    
                    contentHtml += "<img src='images/thug.jpg' />";
                    contentHtml += "<h1>HIRE THUGS</h1>";
                    contentHtml += "<p>Get the work done the hard way"+
                                "<br/>Increases the success rate for crimes by 20%"+
                                " Cost $10,000/month</p>";
                               
                    contentHtml += "<button id='hireThugButton' onclick = 'Expenses.hireThug();'>HIRE</button>";
                contentHtml += "</div>";
                contentHtml += "<div class='expenses'>";
                    
                    contentHtml += "<img src='images/car.jpg' />";
                    contentHtml += "<h1>BUY A CAR</h1>";
                    contentHtml += "<p>Move around in style"+
                                "<br/>reduces your chances of being robbed by 10%</p>";
                    contentHtml += "<button id='buyCarButton' onclick = 'Expenses.buyCar();'>$200,000</button>";
                contentHtml += "</div>";
                contentHtml += "<div class='expenses'>";
                    
                    contentHtml += "<img src='images/lawyer.jpg' />";
                    contentHtml += "<h1>HIRE A LAWYER</h1>";
                    contentHtml += "<p>The suits won't wait"+
                                "<br/>increases your chances of winning law suits by 30%"+
                                " cost $15,000/month</p>";
                    contentHtml += "<button id='hireLawyerButton' onclick = 'Expenses.hireLawyer();'>HIRE</button>";
                contentHtml += "</div>";

            contentHtml += "</div>";

            

            $("#content").html(contentHtml);
            update();
            console.log("done");
        });
    }
    static hireLawyer() {
        if(lawyer) {
            lawyer = false;
        }else if(!lawyer) {
            lawyer = true;
        }
        
        update();
    }
    static buyCar() {

        if(moneyAtHand >= 200000 && !car) {
            moneyAtHand -= 200000;
            car = true;
            update();
        }
    }
    static hireThug() {
        if(thugs) {
            thugs = false;
        }else if(!thugs) {
            thugs = true;
        }
        
        update()
    }
    static buyHouse() {
        if(moneyAtHand >= 2000000 && !house) {
            moneyAtHand -= 2000000;
            house = true;
            update();
        }
    }
}