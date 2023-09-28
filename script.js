const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addTackButton = document.getElementById("addTackButton")
const ClearAllBtn = document.getElementById("ClearAll")

addTackButton.addEventListener("click", addTask) 
ClearAllBtn.addEventListener("click", clearAll) 

function addTask() {                           //если пусто - alert, иначе создаем li с содержанием input, затем сохраняем в localStorage
    if (inputBox.value === '') {
        alert('Вы должны что-нибудь написать')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function (e) { //вешаем слушатели на li через делегирование 
    if (e.target.tagName === 'LI') {                   //при нажатии добавляем/удаляем класс checked и сохраняем в localStorage
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {            //при нажатии на крест в span удаляем li
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {                     //функция сохранения данных(li) в localStorage
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {                     //функция достает данные(li) из localStorage и кладем их в listContainer
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();                               //достает данные(li) из localStorage и кладем их в listContainer           



function clearAll() {                    //удаление всех li и чистка localStorage
    listContainer.innerHTML = ''
    localStorage.clear() 
}