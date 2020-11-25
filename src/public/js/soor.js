setTimeout(() => {
    const task = document.querySelectorAll('.task')
    
    for(i=0; i < task.length; i++)
        task[i].style.transform = 'scale(0.97)'
}, 1);

const openNav = ()=> {

document.getElementById("mySidenav").style.width = "250px";

}

const closeNav = ()=> {

document.getElementById("mySidenav").style.width = "0";

}

const taskAdder = document.getElementById('task_adder')
const adder = document.getElementById('adder')

const createTask = ()=>{

    if(taskAdder.style.height !== '398px'){
        adder.style.animation = 'alternate-reverse close linear 400ms infinite'
        document.getElementById("mySidenav").style.width = "0";
        adder.style.transform = 'rotate(45deg)'
        taskAdder.style.height = '398px'
    }else{
        adder.style.animation= 'alternate-reverse pop linear 400ms infinite'
        adder.style.transform = 'rotate(0deg)'
        taskAdder.style.height = '0px'
    }
}

document.getElementById('create_task').addEventListener('click', ()=> {
    if(taskAdder.style.height === '398px')
        document.getElementById("mySidenav").style.width = "0";
    else
        createTask()
})

adder.addEventListener('click', ()=> createTask())


const lista = [1,2,4,4]

/*
for(i= 0; i < lista.length; i++){

    if(lista[i] + lista[i + 1] == 8){
        console.log(`si, ${lista[i]} + ${lista[i + 1]} = 8`)
    }else if(lista[i] + lista[i + 1] !== 8 && lista[i + 1] < lista.length){
        console.log(`no, ${lista[i]} + ${lista[i + 1]} no es igual a 8`);
    }

}
*/