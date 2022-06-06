const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=>{
    //Lấy giá trị khi user nhập vào
    let userEnteredValue = inputBox.value;
    //Nếu user nhập vào giá trị ( không phải là khoảng trắng )
    if(userEnteredValue.trim() != 0){
        // Thì nút add của ta sẽ sáng lên
        //Trường hợp mình nhập toàn khoảng trắng (space) thì sẽ không sáng lên nhé
        addBtn.classList.add("active");
    } else {
        //Ngược lại thì không thể sáng nè
        addBtn.classList.remove("active");
    }
}

showTask();

addBtn.onclick = ()=>{
    //Khi user nhấn vào nút add
    //Lấy giá trị mà user đã nhập ở ô input
    let userEnteredValue = inputBox.ariaValueMax;
    //Lấy localStorage ( biến lưu trữ cục bộ )
    let getLocalStorageData = localStorage.getItem("New todo");
    if(getLocalStorageData = null){
        //Nếu như localStorage = null
        //Thì sẽ tạo ra 1 mảng rỗng
        listArray = [];
    }
    else {
        //Ngược lại thì sẽ chuyển JSON từ dạng string sang Object
        listArray = JSON.parse(getLocalStorageData);
    }
    //Đẩy giá trị mới vào mảng đã tạo
    listArray.push(userEntererValue);
    localStorage.setItem("New todo, JSON.stringify(listArray)");
    showTasks();
    addBtn.classList.remove("active");
}

function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
        //Nếu như localStorage = null
        //Thì sẽ tạo ra 1 mảng rỗng
        listArray = [];
    } else {
        //Ngược lại thì sẽ chuyển từ JSON từ dạng string sang Object
        listArray = JSON.parse(getLocalStorageData);
    }
    const pendingTaskNumb = document.querySelector(".pendingTask");
    pendingTaskNumb.textContent = listArray.length;
    if(listArray.length > 0){
        deleteAllBtn.classList.add("active");
    }
    else {
        deleteAllBtn.classList.remove("active");
    }
    let newLitag = " ";
    listArray.forEach(element, index) => {
        newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLitag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1);
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTask();
}

deleteAllBtn.onclick = ()=>{
    listArray = [];
    localStorage.setItem("New todo", JSON.stringify(listArray));
    showTask();
}
