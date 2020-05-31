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

        let addr = document.getElementById('listingAddress').innerText.replace('\n', ', ');
        var propertyInfo = {
            mls: document.getElementById("MLNumberVal").textContent,
            address: addr,
            price: document.getElementById('listingPrice').textContent,
            title: document.getElementById('propertyDetailsSectionContentSubCon_Title').getElementsByClassName('propertyDetailsSectionContentValue')[0].textContent
        };

        // Directly respond to the sender (popup),
        // through the specified callback.
        response(propertyInfo);
    }
});