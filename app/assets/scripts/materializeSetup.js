document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  // initialize scrollspy
  elems = document.querySelectorAll('.scrollspy');
  instances = M.ScrollSpy.init(elems);
});
