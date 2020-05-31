'use strict';

let goToRealMaster = document.getElementById('goToRealMaster');

goToRealMaster.onclick = function (element) {
    console.log("Go to real master....");

    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('POST', 'https://www.realmaster.com/1.5/props/autocompleteGetNext', true);

    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        if (request.status >= 200 && request.status < 400) {
            console.log(data);
            window.open(data.l[0].webUrl);
        } else {
            alert('Access to www.realmaster.com returns error!');
        }
    }

    request.setRequestHeader("Content-type", "application/json");
    // Send request
    var MLSNumber = document.getElementById('MLSNumber').textContent;
    request.send(JSON.stringify({"s": MLSNumber}));

}
