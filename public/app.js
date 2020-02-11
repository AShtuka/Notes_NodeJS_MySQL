$( document ).ready($(".dropdown-trigger").dropdown());

$(document).ready(function(){
    $('.modal').modal();
});

document.addEventListener('DOMContentLoaded', () => {
    const addListBtn = document.getElementById('addList');
    if (addListBtn) {
        addListBtn.addEventListener('click', () => {
            const subtaskContainer = document.getElementById('subtasksContainer');
            subtaskContainer.classList.remove('hidden');
        })
    }

    const addSubtaskBtn = document.getElementById('addSubtask');
    addSubtaskBtn.addEventListener('click', () => {
        const subtasksList = document.getElementsByName('subtasksList');
        const newSubtask = subtasksList[0].cloneNode(true);
        newSubtask.children[0].firstElementChild.htmlFor = subtasksList.length;
        newSubtask.children[0].firstElementChild.firstElementChild.id = subtasksList.length;
        subtasksList[subtasksList.length - 1].before(newSubtask);
    })
});