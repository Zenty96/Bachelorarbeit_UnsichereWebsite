var today = new Date();
var dateToday = today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

function submitBlogEntry() {
    var username = document.getElementById("inputBlogUser").value;
    var heading = document.getElementById("inputBlogHeading").value;
    var text = document.getElementById("inputBlogText").value;

    var html = generateHTML(username, heading, text);
    document.getElementById("entries").innerHTML = html;
}

function generateHTML(usr, hdng, txt) {

    var htmlOld = document.getElementById("entries").innerHTML;
    var htmlToAdd =
        "<div class='card'><h2>" + hdng + "</h2><h5>uploaded " + dateToday + " by " + usr + "</h5><br>" + txt + "</div>";

    return htmlToAdd + htmlOld;
}