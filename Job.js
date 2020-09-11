


class Job {
    static load () {
        $(document).ready (function () {
            var contentHtml = "<table class='jobTable'>";
                for(let y = 0; y < 13; y++) {
                    contentHtml += "<tr>";
                        for(let x = 0; x < 20; x++) {
                            contentHtml += "<td id = '"+x+"-"+y+"' ></td>";
                        }
                    contentHtml += "</tr>";
                }

            contentHtml += "</table>";
            $("#content").html(contentHtml);
            update();
            console.log("done");
        })
       
    }
    
}