'use strict';

let direction = document.getElementById('direction');

direction.onclick = function (element) {
    let address = document.getElementById("propertyAddress").textContent.split(' ').join('+');
    let dest = "Askuity+Toronto";
    let url = `https://www.google.com/maps/dir/?api=1&origin=${address}&destination=${dest}&travelmode=driving`;
    window.open(url);
};
