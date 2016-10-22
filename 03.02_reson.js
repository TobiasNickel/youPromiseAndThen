// types of async

// 2. external prozess / sync
function xhrGet(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, false);

    xhr.send(null);

    var OK = 200;
    if (xhr.status === OK) {
        return xhr.responseText;
    } else {
        throw new Error('requestError ' + xhr.status);
    }
}