var success = document.getElementById('success');
var error = document.getElementById('error');

window.addEventListener('offline', function (){
  success.style.display = 'none';
  error.style.display = 'block';
})

window.addEventListener('online', function (){
  error.style.display = 'none';
  success.style.display = 'block';
    setTimeout(function() {
      success.style.display = 'none';
    }, 5000);
});