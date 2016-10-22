// async styles

// jQuery

$.apax({
    url: 'send-ajax-data.php',
    success: function(message) {
        alert(message);
    },
    error: function(xhr, statusText) {
        alert(statusText);
    }
});