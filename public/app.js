let emptySubtask;

const createEmptySubtask = () => {
    const subtasksList = document.getElementsByName('subtasksItem');
    const newSubtask = subtasksList[0].cloneNode(true);
    newSubtask.querySelector('.checkbox').checked = false;
    const inputField = newSubtask.querySelector('.subtask');
    inputField.value = '';
    inputField.classList.remove('line-through');
    inputField.dataset.id = '';
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

const getData = (isUpdate, id) => {
    const title = document.getElementById('title').value;
    let inWorkList = document.getElementById('inWork');
    inWorkList = inWorkList.querySelectorAll('input[type=text]');
    let doneList = document.getElementById('done');
    doneList = doneList.querySelectorAll('input[type=text]');
    const itemList = [];
    inWorkList.forEach(item => {
        itemList.push({isDone : false, title : item.value, id: item.dataset.id});
    });
    doneList.forEach(item => {
        itemList.push({isDone : true, title : item.value, id: item.dataset.id});
    });
    const data = {noteId: id, noteTitle : title, subtasks : itemList};
    let route = '/notePage';
    let method = 'post';
    if (isUpdate) {
        route += '/update';
        method = 'put';
    }
    fetch(route, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({data})
    })
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                window.location.replace('/notesPage')
            }
        })
        .catch(e => console.log(e));
};

const deleteTask = id => {
    fetch(`/notePage/${id}`, {
        method: 'delete',
    })
        .then(res => {
            if (res.status === 204) {
                window.location.replace('/notesPage')
            }
        })
        .catch(e => console.log(e));
};

const createCategory = id => {
    const categoryName = document.getElementById('category_name').value;
    fetch(`/notePage/category/${id}`, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({categoryName})
    })
        .then(res => {
            if (res.status === 201) {
                window.location.replace(`/notePage/${id}`)
            }
        })
        .catch(e => console.log(e));
}

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
                if (notePage.dataset.id !== '') {
                    getData(true, notePage.dataset.id)
                } else {
                    getData();
                }
            } else if (event.target.dataset.name === 'delete') {
                deleteTask(notePage.dataset.id);
            } else if (event.target.id === 'createCategory') {
                createCategory(notePage.dataset.id);
            }
        });
    }
});

$(document).ready($(".dropdown-trigger").dropdown());

$(document).ready(function(){$('.sidenav').sidenav();});

$(document).ready(function(){
    $('.modal').modal();
});