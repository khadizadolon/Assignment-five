
function newTaskAssignedNumber(id){
    let taskAssigned = document.getElementById(id).innerText;
    const intTaskNumber = parseInt(taskAssigned);

    const result = intTaskNumber - 1;

    document.getElementById("task-number").innerText = result;

    if(result == 0){
        alert('Congrates!!! you have completed all the current task.');
    }
    else{
        console.log("not finish");
    }
    
}


function navButtonNumber(id){
    const navBtn = document.getElementById(id).innerText;
    const intNavNumber = parseInt(navBtn);

    const result2 = intNavNumber + 1;
    document.getElementById("nav-value").innerText = result2;
}

// disable function
function btnDisable(id){
    id.setAttribute('disabled', 'true');
    id.classList.remove("bg-[#3752FD]");
    id.classList.add("bg-[#3751fd2a]", "cursor-not-allowed");
}

// history function

function history(headlineId, historyId) {
    const headLine = document.getElementById(headlineId).innerText;
    const history = document.getElementById(historyId)
    const p = document.createElement('p');

const d = new Date()
const date =p.innerHTML = d.toLocaleTimeString('en-US', { hour12: true });;

    p.innerText = `
    You have Complete The Task ${headLine} at ${date}` 
    p.classList.add(
        "text-[#00000083]",
        "bg-[#F4F7FF]",
        "pl-3",
        "pb-3",
        "pr-3",
        "rounded-lg",
        "mt-4"
    )
    history.appendChild(p)  
}

const d = new Date()
const date = document.getElementById('date').innerHTML = d.toDateString();