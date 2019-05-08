document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instance = M.Carousel.init(elems, {
    indicators: true,
    fullWidth: true
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('.tabs');
  var instances = M.Tabs.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var options = {};
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  let options = {};
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});
