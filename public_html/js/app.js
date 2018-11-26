const structureListTemplate = document.querySelector('.page-list-template .page');
const subPageStructureListTemplate = document.querySelector('.subpage-list-template .page');

const structureList = document.querySelector('.structure-list');

structureListElements = structureList.querySelectorAll('.page');

const newPage = document.querySelector('.new-page');
newPage.addEventListener('click', function () {
  newStructureListElement = structureListTemplate.cloneNode(true);
  newStructureListElement.querySelector('input').value = '';
  structureList.appendChild(newStructureListElement);
  removeButton = newStructureListElement.querySelector('.remove');
  removeButton.addEventListener('click', function () {

    parent = this.closest('.page');
    parent.remove();

  });

  var newSubPageButton = newStructureListElement.querySelector('.new-subpage');
  newSubPageButton.addEventListener('click', function () {
    newStructureListElement = subPageStructureListTemplate.cloneNode(true);
    parent = this.closest('.subpages');
    parent.insertBefore(newStructureListElement, parent.querySelector('.new-subpage'));

    removeButton = newStructureListElement.querySelector('.remove');
    removeButton.addEventListener('click', function () {

      parent = this.closest('.page');
      parent.remove();

    });
  });
});

const newSubPage = document.querySelector('.new-subpage');



var structureListElementRemove = structureList.getElementsByClassName('remove');
console.log(structureListElementRemove);

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