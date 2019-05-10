import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Initialize editor
ClassicEditor.create(document.querySelector('#body'))
  .then(editor => {
    console.log(editor);
  })
  .catch(error => {
    console.error(error);
  });
