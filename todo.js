 let todoList = 0;
 let OriginalPage;
//load original page

  
window.addEventListener('DOMContentLoaded', function () {
  OriginalPage = document.getElementById('baggage').innerHTML;
})




  //load notifications page
  function notifications1(){
     const baggage = document.getElementById('baggage');
      
      baggage.innerHTML = ''
      baggage.style.flexDirection = 'column';
      baggage.style.width = '100%';
     

   if (todoList === 0){
      document.getElementById('baggage').innerHTML= 'You have no notifications';

    /*document.querySelector('.main').style= `background-color: rgba(186, 243, 186, 0.815);
    `; */
    }else if (todoList > 0){
      const allDivs = Array.from(document.querySelectorAll('.notifications'));
      
     

       allDivs.forEach(div => {
        const notifyClone = div.cloneNode(true)
        notifyClone.style.display = 'block';
        notifyClone.style.marginBottom = '20px';
        notifyClone.style.width = '80%';
        baggage.appendChild(notifyClone);
       });
       /*document.querySelector('.main').style= `background-color: rgba(186, 243, 186, 0.815);
    `*/
       }
    }
   
  
 //add notification
  function addNotice(){
    const newDiv = document.createElement('div');
    newDiv.className = 'notifications'
    newDiv.textContent = 'you just added a todo';
    newDiv.style.backgroundColor = 'red';
    newDiv.style.padding = '30px'; 
    newDiv.style.display = 'none';
    newDiv.style.borderRadius = '5px';
    
    document.body.appendChild(newDiv);
  }

 
 


  function addtodo(){
    //create todo object
    const task = document.getElementById('text-input').value;
    const dateofTask = document.getElementById('which-day').value;
    const todoTime = document.getElementById('todo-time').value;

    const userInput = {
      name: task,
      date: dateofTask,
      time: todoTime
    }

    //add todos
    const alltodoDivs = document.createElement('div');
    alltodoDivs.className = 'todos';
    alltodoDivs.innerHTML = `task name: ${userInput.name}<br>
    date of task: ${userInput.date}<br>
    time of task: ${userInput.time}`;
    alltodoDivs.style.backgroundColor = 'yellow';
    alltodoDivs.style.padding = '50px';
    alltodoDivs.style.display = 'none';

    document.body.appendChild(alltodoDivs);
  }

  //load todos page
  function loadtodosPage(){
  const todoPage = document.getElementById('baggage');

   //clear page first
    todoPage.innerHTML = '';
      todoPage.style.flexDirection = 'column';
      todoPage.style.width = '100%';
      //todoPage.style.paddingTop = '200px';

    if (todoList === 0){
    todoPage.innerHTML = 'No todos added yet'
    }else if(todoList > 0){
      const todoDivs = Array.from(document.querySelectorAll('.todos'));
    
     

       todoDivs.forEach(div => {
        const clonedDiv = div.cloneNode(true);
        clonedDiv.style.display = 'block';
        clonedDiv.style.marginBottom = '20px';
        clonedDiv.style.width = '80%';
        clonedDiv.style.borderRadius = '5px';
        todoPage.appendChild(clonedDiv);
       });
      } 
      //document.getElementById('baggage').style.display = 'none';
      document.getElementById()
    }
  function loadOriginalPage(){
    const baggage = document.getElementById('baggage');
    baggage.innerHTML = OriginalPage; // Restore original content
     
}