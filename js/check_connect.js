window.addEventListener('offline', function (){
    document.getElementById('success').style.display = 'none';
    setTimeout(function() {
        document.getElementById('error').style.display = 'block';
    }, 2000);
})

window.addEventListener('online', function (){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'block';
    setTimeout(function() {
        document.getElementById('success').style.display = 'none';
    }, 5000);
});