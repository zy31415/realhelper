function listener() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {urlMatches: '.*\.realtor\.ca\/real\-estate\/.*'}
            }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {urlMatches: '.*\.realmaster\.com\/zh\-cn\/.*'},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
}

chrome.runtime.onInstalled.addListener(listener);


chrome.runtime.onMessage.addListener((msg, sender) => {
    // First, validate the message's structure.
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
        // Enable the page-action for the requesting tab.
        chrome.pageAction.show(sender.tab.id);
    }
});