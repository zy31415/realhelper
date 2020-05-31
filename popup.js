// Example here is from: https://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html

'use strict';

console.log("This is popup.js.")


// Update the relevant fields with the new data.
const setPropertyInfo = info => {
    document.getElementById('MLSNumber').textContent = info.mls;
    document.getElementById('propertyAddress').innerHTML = info.address;
    document.getElementById('price').textContent = info.price;
    document.getElementById('title').textContent = info.title;
    document.getElementById('bedrooms').textContent = info.bedrooms;
    document.getElementById('bathrooms').textContent = info.bathrooms;
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        // ...and send a request for the DOM info...
        chrome.tabs.sendMessage(
            tabs[0].id,
            {from: 'popup', subject: 'PropertyInfo'},
            // ...also specifying a callback to be called
            //    from the receiving end (content script).
            setPropertyInfo);
    });
});


