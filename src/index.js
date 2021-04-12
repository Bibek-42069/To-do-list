import {
    switchListBeingShown as switchList,
    methodForCollapsibleText as uncollapse
} from './dom-module'

let toDoArr = [];

const date_type_div = document.querySelector('.date-types');
const date_type_buttons = date_type_div.querySelectorAll('button');
const date_type_a = date_type_div.querySelectorAll('a')

const create_to_do_task = document.querySelector('#createTask')

const task_openers = [...document.querySelectorAll('.task-opener')];

task_openers.forEach(item => item.addEventListener('click', uncollapse.bind(item, item)))

create_to_do_task.addEventListener('click', () => console.log('wroks'))

date_type_a[0].addEventListener('click', switchList.bind(date_type_buttons[0],'.content','Today'));
date_type_a[1].addEventListener('click', switchList.bind(date_type_buttons[1],'.content','This Week'));
date_type_a[2].addEventListener('click', switchList.bind(date_type_buttons[2],'.content','This Month'));
date_type_a[3].addEventListener('click', switchList.bind(date_type_buttons[3],'.content','This Year'));


console.log(date_type_buttons)
console.log(date_type_a)