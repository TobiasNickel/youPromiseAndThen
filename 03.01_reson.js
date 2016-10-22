// types of async

// 2. external prozess / sync

var xhr = new XMLHttpRequest();
xhr.open('get', 'send-ajax-data.php', false);

xhr.send(null);

var OK = 200;
if (xhr.status === OK) {
    alert(xhr.responseText);
} else {
    alert('Error: ' + xhr.status);
}

// https://en.wikipedia.org/wiki/Ajax_%28programming%29