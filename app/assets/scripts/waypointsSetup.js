import 'waypoints/lib/noframework.waypoints.min';

const waypoint = new Waypoint({
  element: document.querySelector('body'),
  handler: direction => {
    let nav = document.querySelector('nav');
    nav.classList.toggle('transparent');
    nav.classList.toggle('blue-grey');
    nav.classList.toggle('darken-3');
  },
  offset: '-50%'
});
