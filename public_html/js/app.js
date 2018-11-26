const structureListTemplate = document.querySelector('.page-list-template .page');
const subPageStructureListTemplate = document.querySelector('.subpage-list-template .page');

const structureList = document.querySelector('.structure-list');

structureListElements = structureList.querySelectorAll('.page');


structureListElements.forEach(function (element) {
  let newSubPageButton = element.querySelector('.new-subpage');

  // Элементы имеющиеся при загрузке
  elementTitleInput = element.querySelector('.title>input');
  elementTitleInput.addEventListener('change', function () {
    titleInput = parent.querySelector('.title input');
    titleInput.disabled = true;
  });

  removeButton = element.querySelector('.remove');
  removeButton.addEventListener('click', function () {

    parent = this.closest('.page');
    parent.remove();

  });

  changeButton = element.querySelector('.change');
  changeButton.addEventListener('click', function () {
    parent = this.closest('.page');
    titleInput = parent.querySelector('.title input');
    if (titleInput.disabled == true) {
      titleInput.disabled = false;
      titleInput.focus();
      titleInput.select();
    } else {
      titleInput.disabled = true;
    }
  });

  newSubPageButton.addEventListener('click', function () {

    // Подготовка нового элемента
    newStructureListElement = subPageStructureListTemplate.cloneNode(true);
    parent = this.closest('.subpages');
    parent.insertBefore(newStructureListElement, parent.querySelector('.new-subpage'));

    elementTitleInput = newStructureListElement.querySelector('.title>input');
    elementTitleInput.addEventListener('change', function () {
      this.disabled = true;
    });

    removeButton = newStructureListElement.querySelector('.remove');
    removeButton.addEventListener('click', function () {

      parent = this.closest('.page');
      parent.remove();

    });

    // фокус на название нового элемента
    titleInput = newStructureListElement.querySelector('.title input');
    titleInput.focus();
    titleInput.select();

    changeButton = newStructureListElement.querySelector('.change');
    changeButton.addEventListener('click', function () {
      parent = this.closest('.page');
      titleInput = parent.querySelector('.title input');
      if (titleInput.disabled == true) {
        titleInput.disabled = false;
        titleInput.focus();
        titleInput.select();
      } else {
        titleInput.disabled = true;
      }
    });

  });

});



const newPage = document.querySelector('.new-page');
newPage.addEventListener('click', function () {

  // Подготовка нового элемента
  newStructureListElement = structureListTemplate.cloneNode(true);
  newStructureListElement.querySelector('input').value = '';
  structureList.appendChild(newStructureListElement);

  elementTitleInput = newStructureListElement.querySelector('.title>input');
  elementTitleInput.addEventListener('change', function () {
    this.disabled = true;
  });


  removeButton = newStructureListElement.querySelector('.remove');
  removeButton.addEventListener('click', function () {
    parent = this.closest('.page');
    parent.remove();
  });

  // фокус на название нового элемента
  titleInput = newStructureListElement.querySelector('.title input');
  titleInput.focus();
  titleInput.select();

  changeButton = newStructureListElement.querySelector('.change');
  changeButton.addEventListener('click', function () {
    parent = this.closest('.page');
    titleInput = parent.querySelector('.title input');
    if (titleInput.disabled == true) {
      titleInput.disabled = false;
      titleInput.focus();
      titleInput.select();
    } else {
      titleInput.disabled = true;
    }
  });

  var newSubPageButton = newStructureListElement.querySelector('.new-subpage');
  newSubPageButton.addEventListener('click', function () {
    newStructureListElement = subPageStructureListTemplate.cloneNode(true);

    parent = this.closest('.subpages');
    parent.insertBefore(newStructureListElement, parent.querySelector('.new-subpage'));

    elementTitleInput = newStructureListElement.querySelector('.title>input');
    elementTitleInput.addEventListener('change', function () {
      this.disabled = true;
    });


    removeButton = newStructureListElement.querySelector('.remove');
    removeButton.addEventListener('click', function () {

      parent = this.closest('.page');
      parent.remove();

    });

    // фокус на название нового элемента
    titleInput = newStructureListElement.querySelector('.title input');
    titleInput.focus();
    titleInput.select();

    changeButton = newStructureListElement.querySelector('.change');
    changeButton.addEventListener('click', function () {
      parent = this.closest('.page');
      titleInput = parent.querySelector('.title input');
      if (titleInput.disabled == true) {
        titleInput.disabled = false;
        titleInput.focus();
        titleInput.select();
      } else {
        titleInput.disabled = true;
      }
    });


  });

});

const newSubPage = document.querySelector('.new-subpage');



var structureListElementRemove = structureList.getElementsByClassName('remove');


[].forEach.call(structureListElementRemove, function (element) {
  element.addEventListener('click', function () {

    parent = this.closest('.page');
    parent.remove();

  });
});

$( function() {
  $( "#draggable" ).draggable();
  $( ".resizable" ).resizable();
} );