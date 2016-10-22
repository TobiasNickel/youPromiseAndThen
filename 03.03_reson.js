// types of async

// 2. external prozess / sync

try {
    var message = xhrGet('send-ajax-data.php');
    alert(message);
} catch (err) {
    alert(err);
}