// async styles

// node-style

function xhrGet(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                callback(null, xhr.responseText);
            } else {
                callback(new Error('Error: ' + xhr.status));
            }
        }
    };

    xhr.send(null);
}