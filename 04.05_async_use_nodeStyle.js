// async styles

// node-style

xhrGet('/messages/1', function(err, message) {
    if (err) {
        alert(err.message);
        return;
    }
    alert(message);
    xhr('/messages/1/author', function(err, user) {
        if (err) {
            alert(err.message);
            return;
        }
        alert('by ' + user);
        xhrGet('/messages/1/comments', function(err, comments) {
            if (err) {
                alert(err.message);
                return;
            }
            alert(comments);
        });
    });
});