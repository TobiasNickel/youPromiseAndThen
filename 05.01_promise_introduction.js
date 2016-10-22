// Promise

// Introduction

function xhrGet(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url);

        xhr.onreadystatechange = function() {
            var DONE = 4;
            var OK = 200;
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error('Error: ' + xhr.status));
                }
            }
        };

        xhr.send(null);
    });
}