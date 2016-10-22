// Promise

// Using promise

xhrGet('/messages/1')
    .then((message) => {
        alert(message);
        return xhrGet('/messages/1/author');
    })
    .then((author) => {
        alert('by ' + author);
        return xhrGet('/message/1/comments');
    })
    .then((comments) => {
        alert(comments);
    })
    .catch((err) => {
        alert(err.message);
    });