const onBeforeSendHeaders = ({requestHeaders}) => {
    requestHeaders = requestHeaders.filter(header => header.name.toLowerCase() !== 'referer');
    requestHeaders.push({
        name: 'referer',
        value: `https://t.co/${Math.random().toString(36).slice(2)}`
    });
    return {requestHeaders};
};

chrome.webRequest.onBeforeSendHeaders.addListener(onBeforeSendHeaders,
    {urls: ['*://*.medium.com/*']},
    ['blocking', 'requestHeaders']);
