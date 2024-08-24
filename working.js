$(document).ready(function() {
    $('#add-task').click(function() {
        let taskText = $('#new-task').val();
        if (taskText !== '') {
            // Create a unique ID for the task
            let taskId = 'task-' + new Date().getTime();
            // Create the task item
            let taskItem = `
                <div id="${taskId}" class="list-group-item" draggable="true" ondragstart="drag(event)">
                    ${taskText}
                </div>`;
            // Append the task to the "To Do" drop zone
            $('#to-do-zone').append(taskItem);
            // Clear the input field
            $('#new-task').val('');
        }
    });
});

function allowDrop(ev) {
    ev.preventDefault();
    $(ev.target).closest('.dropzone').addClass('dragover');
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    $(ev.target).addClass('dragging');
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    $(ev.target).closest('.dropzone').removeClass('dragover').append(draggedElement);
    $(draggedElement).removeClass('dragging');
}

$(document).on('dragleave', '.dropzone', function(ev) {
    $(ev.target).removeClass('dragover');
});
