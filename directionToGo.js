// function directionToGo() {
//     var goList = document.getElementById("chooseGo");
//     var goStation = goList.options[goList.selectedIndex].text;
// }

'use strict';

let directionToGo = document.getElementById('directionToGo');

directionToGo.onclick = function (element) {

    let address = document.getElementById("propertyAddress").textContent.split(' ').join('+');

    var goList = document.getElementById("chooseGo");
    var goStation = goList.options[goList.selectedIndex].text;

    let dest = "Askuity+Toronto";
    let url = `https://www.google.com/maps/dir/?api=1&origin=${address}&destination=${goStation}&travelmode=driving`;
    window.open(url);
};
