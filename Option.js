class Option {
    static load() {
        $(document).ready(function () {
            var contentHtml = "<div class='optionDiv'>";
                contentHtml += "<div>";
                    contentHtml += "<button onclick='Option.new();'>Start New Game</button>";
                    contentHtml += "<button>Sound On</button>";
                    contentHtml += "<button onclick='Save.save()'>Save & Exit</button>";
                    contentHtml += "<button onclick='Credit.load()'>Terms & Condition</button>";
                contentHtml += "</div>";
            contentHtml += "</div>";



            $("#content").html(contentHtml);
            update();
            console.log("done");
        })
        

    }
    static new () {
        let res = confirm("Are you sure\nAll game progress would be lost");
        if(res)
            Option.newGame(); 
    }
    static newGame() {
            initialise();
            Load.save();
            update();
        
        
    }
}


class Credit {
    static load () {
        $(document).ready(function () {
            var contentHtml = "<div class='credit'>";
                contentHtml += "<h1>About</h1>";
                contentHtml += "<p>This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+ 
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub. "+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+ 
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub. "+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "This game was first programmed by Ibrahim Abdulsamad"+
                    " also Known as JKid and was uploaded to GitHub."+
                    "</p>";
                
            contentHtml += "</div>";



            $("#content").html(contentHtml);
            update();
            console.log("done");
        })
    }

}