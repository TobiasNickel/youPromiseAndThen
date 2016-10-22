// Promise

// Using promise
function showMessage(msgId) {
    return xhrGet('/messages/${msgId}')
        .then((message) => {
            alert(message);
            return xhrGet('/messages/${msgId}/author');
        })
        .then((author) => {
            alert('by ' + author);
            return xhrGet('/message/${msgId}/comments');
        })
        .then((comments) => {
            alert(comments);
        });
}