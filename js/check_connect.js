// window.addEventListener('offline', function (){
//     document.getElementById('success').style.display = 'none';
//     document.getElementById('error').style.display = 'block';
// })

// window.addEventListener('online', function (){
//     document.getElementById('error').style.display = 'none';
//     document.getElementById('success').style.display = 'block';
//     setTimeout(function() {
//         document.getElementById('success').style.display = 'none';
//     }, 5000);
// });

var success = document.getElementById('success');
var error = document.getElementById('error');

// initial status
checkNetworkStatus();

// check network status periodically
setInterval(checkNetworkStatus, 3000);

function checkNetworkStatus() {
  if (navigator.onLine) {
    error.style.display = 'none';
    success.style.display = 'block';
  } else {
    success.style.display = 'none';
    error.style.display = 'block';
  }
}