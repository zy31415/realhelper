let mls = document.getElementById("MLNumberVal").textContent
console.log("MLS Number is : " + mls)


// Inform the background page that
// this tab should have a page-action.
chrome.runtime.sendMessage({
    from: 'content',
    subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'PropertyInfo')) {
        // Collect the necessary data.
        // (For your specific requirements `document.querySelectorAll(...)`
        //  should be equivalent to jquery's `$(...)`.)
        var propertyInfo = {
            mls: document.getElementById("MLNumberVal").textContent,
            address: document.getElementById('listingAddress').textContent,
            price: document.getElementById('listingPrice').textContent
        };

        // Directly respond to the sender (popup),
        // through the specified callback.
        response(propertyInfo);
    }
});