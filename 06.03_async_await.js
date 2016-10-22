// async / await

// look back, syncronous code

try {
    var message = xhrGet('send-ajax-data.php');
    alert(message);
} catch (err) {
    alert(err);
}