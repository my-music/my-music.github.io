// window.onload = function () {
//     var urlParams = new URLSearchParams(window.location.search);
//     var isAdmin = urlParams.get('isAdmin');
  
//     if (isAdmin === 'true') {
//       // Người dùng hiện tại có quyền admin

//     } else {
//       // Người dùng hiện tại không có quyền admin

//       window.location.href = 'https://mastertlm.github.io/'; // Chuyển hướng đến trang đăng nhập nếu không có quyền admin
//     }
// };
  
// $(document).ready(function() {
//     var windowHeight = $(window).height();
//     var footerHeight = $('footer').height();
//     var headerHeight = $('header').height();
//     var headerOffset = $('header').offset().top;
  
//     $(window).scroll(function() {
//       var scrollPos = $(window).scrollTop();
//       if ((headerOffset + headerHeight) < (scrollPos + windowHeight - footerHeight - 400)) {
//         $('header').addClass('hide');
//       } else {
//         $('header').removeClass('hide');
//       }
//     });
//   });
  