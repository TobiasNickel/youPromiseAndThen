// async / await

// same functionality async

async function showData() {
    try {
        var message = await xhrGet('send-ajax-data.php');
        alert(message);
    } catch (err) {
        alert(err);
    }
}

showData();