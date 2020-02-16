let emptySubtask;

const createEmptySubtask = () => {
    const subtasksList = document.getElementsByName('subtasksItem');
    const newSubtask = subtasksList[0].cloneNode(true);
    newSubtask.querySelector('.checkbox').checked = false;
    newSubtask.querySelector('.subtask').value = '';
    newSubtask.querySelector('.subtask').classList.remove('line-through');
    emptySubtask = newSubtask.cloneNode(true);
    document.getElementById('inWork').appendChild(newSubtask);
};

const addList = () => {
    const subtaskContainer = document.getElementById('subtasksContainer');
    subtaskContainer.classList.remove('hidden');
};

const addSubtask = () => {
    if (emptySubtask) {
        const newSubtask = emptySubtask.cloneNode(true);
        document.getElementById('inWork').appendChild(newSubtask);
    } else {
        createEmptySubtask();
    }
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

const getData = () => {
    const title = document.getElementById('title').value;
    let inWorkList = document.getElementById('inWork');
    inWorkList = inWorkList.querySelectorAll('input[type=text]');
    let doneList = document.getElementById('done');
    doneList = doneList.querySelectorAll('input[type=text]');
    const itemList = [];
    inWorkList.forEach(item => {
        itemList.push({isChecked : true, subtask : item.value});
    });
    doneList.forEach(item => {
        itemList.push({isChecked : false, subtask : item.value});
    });
    const data = {noteTitle : title, subtasks : itemList};
    fetch('/notePage', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    })
        .then(res => res.json())
        .then(({note}) => {
            console.log(note)
        })
        .catch(e => console.log(e));
    console.log(data);
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
            } else if (event.target.dataset.name === 'save') {
                getData();
            }
        });
    }
});

$(document).ready($(".dropdown-trigger").dropdown());

$(document).ready(function(){$('.sidenav').sidenav();});