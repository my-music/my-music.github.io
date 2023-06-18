window.addEventListener('offline', function (){
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'block';
})

window.addEventListener('online', function (){
    document.getElementById('error').style.display = 'none';
    document.getElementById('success').style.display = 'block';
});