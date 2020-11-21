const openNav = ()=> {

document.getElementById("mySidenav").style.width = "250px";

}

const closeNav = ()=> {

document.getElementById("mySidenav").style.width = "0";

}

const adder = document.getElementById('adder')

const createTask = ()=>{

    let taskAdder = document.getElementById('task_adder')

    if(taskAdder.style.height !== '398px'){
        adder.style.animation = 'alternate-reverse close linear 400ms infinite'
        taskAdder.style.height = '398px'
    }else{
        adder.style.animation= 'alternate-reverse pop linear 400ms infinite'
        adder.style.transform = 'rotate(0deg)'
        taskAdder.style.height = '0px'
    }
}


adder.addEventListener('click', ()=> createTask())