var http = require('http');
var client = http.createClient(3000, 'localhost');
var request = client.request('GET', '/matches');

function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/matches", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
}


function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/users", false);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
    var response = JSON.parse(xhttp.responseText);
    var select = document.getElementById('selectPlayer');
var select2 = document.getElementById('selectPlayer2');
    for (var i = 0; i < response.length; i++) {
    	    var opt = response[i].name;
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
    select2.appendChild(el);
    
    }
    

}


function addMatch(pl1,p1,pl2,p2,win){
alert(pl1);
}