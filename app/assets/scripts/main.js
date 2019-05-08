import '../styles/main.scss';
import $ from 'jquery';
import 'materialize-css';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
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

document.addEventListener('DOMContentLoaded', function() {
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

  // Quick Todos
  let todoForm = document.querySelector('#todo-form');
  let todos = document.querySelector('#todos');
  let todoInput = document.querySelector('#todo');

  todoForm.addEventListener('submit', function(ev) {
    let val = todoInput.value;
    let output = `<div>${val}<a class="secondary-content delete" href="#!"><i class="material-icons">close</i></a></div>`;
    let newTodo = document.createElement('LI');
    newTodo.classList.add('collection-item');
    newTodo.classList.add('todo-item');
    newTodo.innerHTML = output;
    newTodo.addEventListener('click', todoClicked);
    todos.appendChild(newTodo);
    todoInput.value = '';
    M.toast({
      html: 'Todo Added',
      displayLength: 3000,
      inDuration: 1000,
      outDuration: 1400
    });
    ev.preventDefault();
  });

  // Delete Todos
  //  add event handler for all existing items
  let todoItems = document.querySelectorAll('.todo-item');
  Array.from(todoItems).forEach(el => {
    el.addEventListener('click', todoClicked);
  });

  // Todo click event handler
  function todoClicked(ev) {
    let elem = ev.target;
    console.log(elem);
    if (elem.parentNode.classList.contains('delete')) {
      this.parentNode.removeChild(this);
    }
    M.toast({ html: 'Todo Removed' });
    ev.preventDefault();
  }

  // Initialize editor
  ClassicEditor.create(document.querySelector('#body'))
    .then(editor => {
      console.log(editor);
    })
    .catch(error => {
      console.error(error);
    });
});
