function copyToClipboard() {
    navigator.clipboard.writeText("+31 6 47015263")
    .then(function() {
    alert('Copied to clipboard');
}).catch(function(err) {
    console.error('Could not copy text: ', err);
});
};
document.getElementById('copy').addEventListener('click', copyToClipboard);