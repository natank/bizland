import '../styles/main.scss';
import $ from 'jquery';
import 'materialize-css';
import './materializeSetup';
import './chart';

// Counter

$('.section').hide();

setTimeout(function() {
  $(document).ready(function() {
    // Hide preloader
    $('.loader').fadeOut();

    // Show sections
    $('.section').fadeIn();
    $('.count').each(function() {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text()
          },
          {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          }
        );
    });
  });
}, 1000);

// Setup comments toasts
var approves = document.getElementsByClassName('approve');
var denies = document.getElementsByClassName('deny');

Array.from(approves).forEach(el => {
  el.addEventListener('click', function(ev) {
    M.toast({ html: 'Comment Approved' });
    ev.preventDefault();
  });
});

Array.from(denies).forEach(el => {
  el.addEventListener('click', function(ev) {
    M.toast({ html: 'Comment Denied' });
    ev.preventDefault();
  });
});
