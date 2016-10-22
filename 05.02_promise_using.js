// Promise

// Using promise

xhrGet('/messages/1')
    .then((message) => {
        alert(message);
    })
    .catch((err) => {
        alert(err.message);
    });