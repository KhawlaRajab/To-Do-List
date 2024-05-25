"use strict";

const container = document.querySelector('.list');
const taskCont = document.querySelector('.task-content');
const btn = document.querySelector('.add');


//add task 
btn.addEventListener('click', function () {
    if (taskCont.value === '') return;
    const html = ` <div class="task-row">
<input type="checkbox" class="check">
<p class="task">${taskCont.value}</p>
<i class="fa fa-close close"></i>
</div>`;

    
    container.insertAdjacentHTML('afterbegin', html);
    taskCont.value = '';

});


//checked task 
container.addEventListener('click', function (e) {
    if (e.target.matches('.check')) {
        //console.log(e.target.parentNode);
        const taskChecked = e.target?.parentNode.querySelector('.task');
        if (taskChecked) {
            if (taskChecked.classList.contains('done'))
                taskChecked.classList.remove('done');
            else
                taskChecked.classList.add('done');
        }
    }
})
;



//delete task 
container.addEventListener('click', function (e) {
    if (e.target.matches('.close')) {
        const delRow = e.target.parentNode;
        delRow.classList.add('delete');
    }
});

