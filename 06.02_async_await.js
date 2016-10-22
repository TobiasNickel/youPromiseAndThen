// async / await

// the same function rewritten

async function showMessage(msgId) {
    alert(await xhrGet('/messages/${msgId}'));
    var author = await xhrGet('/messages/${msgId}/author')
    alert('by ' + author);
    alert(await xhrGet('/message/${msgId}/comments'));
}