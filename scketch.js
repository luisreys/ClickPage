var clicks = 0;

var tmp = document.getElementById("counterDiv").innerHTML = "<h1>0 Clicks</h1>";
console.log(tmp);

function oneClick(){
    clicks = clicks + 1;
    document.getElementById("counterDiv").innerHTML = "<h1>" + clicks + " Clicks</h1>";

}
