const addList = () => {
    const subtaskContainer = document.getElementById('subtasksContainer');
    subtaskContainer.classList.remove('hidden');
};

const addSubtask = () => {
    const subtasksList = document.getElementsByName('subtasksItem');
    const newSubtask = subtasksList[0].cloneNode(true);
    newSubtask.querySelector('.checkbox').checked = false;
    newSubtask.querySelector('.subtask').value = '';
    newSubtask.querySelector('.subtask').classList.remove('line-through');
    document.getElementById('inWork').appendChild(newSubtask);
};

const moveSubtask = subtask => {
    if (!subtask.querySelector('.checkbox').checked) {
        const input = subtask.querySelector('input[type="text"]');
        input.classList.add('line-through');
        const doneList = document.getElementById('done');
        doneList.appendChild(subtask);
    } else {
        const input = subtask.querySelector('input[type="text"]');
        input.classList.remove('line-through');
        document.getElementById('inWork').appendChild(subtask);
    }
};

const showHideDoneList = showHideBtn => {
    const up = showHideBtn.querySelector('.up');
    const down = showHideBtn.querySelector('.down');
    const doneList = document.getElementById('done');
    if (up.classList.contains('hidden')) {
        up.classList.remove('hidden');
        down.classList.add('hidden');
        doneList.classList.add('hidden');
        showHideBtn.querySelector('#markedSubtaskBtn').innerText = 'Show done subtask'
    } else {
        up.classList.add('hidden');
        down.classList.remove('hidden');
        doneList.classList.remove('hidden');
        showHideBtn.querySelector('#markedSubtaskBtn').innerText = 'Hide done subtask'
    }
};

const deleteSubtask = subtask => {
    subtask.remove();
};

document.addEventListener('DOMContentLoaded', () => {
    const notePage = document.getElementById('notePage');
    if (notePage) {

        notePage.addEventListener('focusin', event => {
            if (event.target.name === 'subtask') {
                event.target.parentElement.parentElement.querySelector('.del').classList.remove('hidden');
            }
        });

        notePage.addEventListener('focusout', event => {
            if (event.target.name === 'subtask') {
                event.target.parentElement.parentElement.querySelector('.del').classList.add('hidden');
            }
        });

        notePage.addEventListener('mousedown', event => {
            if (event.target.dataset.name === 'del') {
                deleteSubtask(event.target.closest('li'));
            }
        });

        notePage.addEventListener('click', (event) => {
            if(event.target.dataset.name === 'addList') {
                addList();
            } else if (event.target.dataset.name === 'addSubtask') {
                addSubtask();
            } else if (event.target.dataset.name === 'checkbox') {
                moveSubtask(event.target.closest('li'));
            } else if (event.target.dataset.name === 'markedSubtask') {
                showHideDoneList(event.target.parentElement);
            } else if (event.target.dataset.name === 'del') {
                console.log('hello')

            }
        });
    }
});

$( document ).ready($(".dropdown-trigger").dropdown());