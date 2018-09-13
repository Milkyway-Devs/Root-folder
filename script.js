document.getElementById("twitchchanneltext")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    document.getElementById("myBtn").click();
 
}
});