// Selectors


const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');







// Event listners

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);




          
      
   


// Function
    function addTodo(event){
        if(todoInput.value !== ''){

        // prevent form from submitting
        event.preventDefault();
        // create todo div
 
        const todoDiv = document.createElement('div');
        // the above creates a new div
        todoDiv.classList.add('todo');
        // the above code creates  a class name todo so <div class = "todo">
        // create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
       
 
        //console.log(newTodo);
 
      
        // checked mark button
 
        const completedButton = document.createElement('button');
        completedButton.innerHTML= '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
         // delete or trash 
        const trashButton = document.createElement('button');
        trashButton.innerHTML= '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
 
 
        // append to list 
        todoList.appendChild(todoDiv);
       
        // clearing the input field value
        todoInput.value = '';
        // bringing the focus to prvious element
        todoInput.focus();
       
 
 
    } else {
        alert('Please Fill the description');
        event.preventDefault();
        todoInput.focus();


    }
    
}
   

function deleteCheck(e){
    // console.log(e.target);

       // delete the todo
     
    if(e.target.matches('.trash-btn'))
    {
        const todo = e.target.parentElement
        // this below 1 line of classlist is to add animnation
        todo.classList.add('fall');
// add special evetn listner which will help to delete the element after the animation
todo.addEventListener('transitionend',function(){

    todo.remove();

})

    }

    if(e.target.matches('.complete-btn'))
    {
        // changing the classlist and adding completed classlist in our css file
        e.target.parentElement.classList.toggle('completed');
    }
}