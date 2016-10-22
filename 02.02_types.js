// types of async

// 2. external prozess / request-response

var xhr = new XMLHttpRequest();
xhr.open('get', 'send-ajax-data.php');

xhr.onreadystatechange = function() {
    var DONE = 4;
    var OK = 200;
    if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
            alert(xhr.responseText);
        } else {
            alert('Error: ' + xhr.status);
        }
    }
};

xhr.send(null);

// https://en.wikipedia.org/wiki/Ajax_%28programming%29