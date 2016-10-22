// async styles

// node-style

xhrGet('/messages/1', function(err, message) {
    if (err) {
        alert(err.message);
        return;
    }
    alert(message);
});