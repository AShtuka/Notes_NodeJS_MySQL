document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('modal').addEventListener('click', (event) => {
       if(event.target.dataset.name === 'addList') {
           const subtaskContainer = document.getElementById('subtasksContainer');
           subtaskContainer.classList.remove('hidden');
       } else if (event.target.dataset.name === 'addSubtask') {
           const subtasksList = document.getElementsByName('subtasksItem');
           const newSubtask = subtasksList[0].cloneNode(true);
           newSubtask.querySelector('.label').htmlFor = subtasksList.length;
           newSubtask.querySelector('.checkbox').id = subtasksList.length;
           newSubtask.querySelector('.checkbox').checked = false;
           newSubtask.querySelector('.subtask').value = '';
           document.getElementById('inWork').appendChild(newSubtask)
       } else if (event.target.dataset.name === 'checkbox') {
           const item = event.target.closest('li');
           const input = item.querySelector('input[type="text"]');
           input.classList.add('line-through');
           document.getElementById('done').appendChild(item)
       }
    });
});

$( document ).ready($(".dropdown-trigger").dropdown());

$(document).ready(function(){
    $('.modal').modal();
});