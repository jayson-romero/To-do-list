// SELECT ITEMS 
const alert = document.querySelector('.alert');
const form = document.querySelector('.todolist-form');
const todolist = document.getElementById('todolist');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.todolist-container');
const list = document.querySelector('.todolist-list');
const clearBtn = document.querySelector('.clear-btn');


// edit option 
let editElement;
let editFlag = false;
let editID = "";

//********EVENT LISTENERS
//submit Form 
form.addEventListener('submit', addItem)
//clear items 
clearBtn.addEventListener('click', clearItems)
// load items 
window.addEventListener('DOMContentLoaded', setupItems);
//********FUNCTIONS
function addItem(e) {
     e.preventDefault();// to avoid sending to server 
     const value = todolist.value //geting the value from field
     const id = new Date().getTime().toString(); //generate unique number for ID //not a best practices
     if(value && !editFlag) { // shorthand of if value have value & editflag is false
            createListItem(id, value)
            //display alert 
            displayAlert('item added to the list ', 'success');
            //show container
            container.classList.add("show-container");
            //add to local storage
            addToLocalStorage(id, value);
            //setBack to default
            setBackToDefault()
     }else if(value !== ''&& editFlag === true) { // longhand 
           editElement.innerHTML = value;
           displayAlert('value Changed', 'success');
           //edit local storage 
           editLocalStorage(editID, value);;
           setBackToDefault();

     }else{ 
        displayAlert('Please enter value', 'danger')
     }
     
}
//display alert
function displayAlert(text, action) {
        alert.textContent = text;
        alert.classList.add(`alert-${action}`)
        //remove alert
        setTimeout(function(){
            alert.textContent = "";
            alert.classList.remove(`alert-${action}`) 
        },1000)
}

//clear items
function clearItems(){
      const items = document.querySelectorAll('.todolist-item');
      if (items.length > 0) {
            items.forEach(function(item){
                  list.removeChild(item);
            });
      }
      container.classList.remove("show-container");
      displayAlert("empty list", "danger");
      setBackToDefault();
      localStorage.removeItem('list');
    
}

//delete function 
function deleteItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      const id = element.dataset.id
      list.removeChild(element);
      if(list.children.length === 0) {
            container.classList.remove("show-container");
      }
      displayAlert("item removed", "danger");
      setBackToDefault()
      //remove from local storage
      removeFromLocalStrorage(id);
}     

//edit function 
function editItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      //set edit item / get the title
      editElement = e.currentTarget.parentElement.previousElementSibling;
      //set form value
      todolist.value = editElement.innerHTML;
      editFlag = true;
      editID = element.dataset.id;
      submitBtn.textContent = 'edit';
}


//set back to default
function setBackToDefault(){
      todolist.value = '';
      editFlag = false;
      editID = '';
      submitBtn.textContent = "submit"
}

//********LOCAL STORAGE 
function addToLocalStorage(id, value) {
      const todolist = {id,value};
      let items = getLocalStorage();
      console.log(items)
      items.push(todolist);
      localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStrorage(id){
      let items = getLocalStorage();
      items = items.filter(function(item){
            if(item.id !== id){
                  return item
            }
      })
      localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value){
      let items = getLocalStorage();
      items = items.map(function(item) {
            if(item.id === id) {
                  item.value = value;
            }
            return item;
      });
        localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return  localStorage.getItem('list')
      ? JSON.parse(localStorage.getItem('list'))
      : [];
}
//localStorage API
//setitem 
//getItem 
//removeItem
//save as strings
// localStorage.setItem('orange', JSON.stringify(["item", "item2"]))

// const orange = JSON.parse(localStorage.getItem('orange'))
// console.log(orange);

// localStorage.removeItem("orange")

//********SETUP ITEMS 
function setupItems(){
      let items = getLocalStorage();
      if(items.length > 0) {
            items.forEach(function(item){
               createListItem(item.id, item.value)
            })
            container.classList.add("show-container")
      }
}

function createListItem(id, value) {
       //create article element
          const element = document.createElement('article')  
          // add class 
          element.classList.add('todolist-item');
          //add id
          const attr = document.createAttribute('data-id');
          attr.value = id 
          element.setAttributeNode(attr);
          element.innerHTML = ` <p class="title">${value}</p>
                              <div class="btn-container">
                                    <button type="button" class="edit-btn">
                                          <i class="fas fa-edit"></i>
                                    </button>
                                     <button type="button" class="delete-btn">
                                          <i class="fas fa-trash"></i>
                                    </button>
                              </div>`;
            const deleteBtn = element.querySelector('.delete-btn');
            const editBtn = element.querySelector('.edit-btn');
            deleteBtn.addEventListener('click', deleteItem);
            editBtn.addEventListener('click', editItem);
            //append child
            list.appendChild(element);
}