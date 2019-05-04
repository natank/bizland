import '../styles/main.scss';
import $ from 'jquery';
import 'materialize-css';
import './materializeSetup';

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
