const handleTask = ()=>{
     let taskInput = document.getElementById("taskInput").value
  
      let category = document.getElementById("selectTask").value

      if(!taskInput){
        return alert("please enter task")
      }
      
      if(!category){
        return alert("please  select a category")
      }


     let task = JSON.parse(localStorage.getItem("Task")) || []
     task.push({text:taskInput,category:category})
     localStorage.setItem("Task",JSON.stringify(task))

      displaydata()

    }

    const displaydata =()=>{
    let task = JSON.parse(localStorage.getItem("Task")) ||[]

    let taskList = document.getElementById("taskList")
    taskList.innerHTML =""

        task.forEach((ele,index) => {
      let div = document.createElement("div")
      let p=  document.createElement("p")
      p.innerText = ele.text
    

      let checkBox = document.createElement("input")
      checkBox.type ="checkbox"

      let deletebtn = document.createElement("button")
      deletebtn.innerText= "Delete"
      deletebtn.id="deletebtn"

       deletebtn.addEventListener("click", () => {
      deleteTask(index);
    });

      const taskCategory=  document.createElement("h4")
      taskCategory.innerText = ele.category
    

       div.append(p,checkBox,deletebtn,taskCategory)
      taskList.appendChild(div)
      document.getElementById("taskInput").value=""
    });
    }

    const clearTask =()=>{
      localStorage.removeItem("Task")
      displaydata()

    }

// delete task :---
  

 const deleteTask =(deleteIndex)=>{
    let task = JSON.parse(localStorage.getItem("Task"))
    const updatedItem = task.filter((ele,index)=> index!= deleteIndex)
    localStorage.setItem("Task",JSON.stringify(updatedItem))
    displaydata()
 }

 const filterTask = ()=>{
  const category = document.getElementById("searchInput").value
  const taskList = document.getElementById("taskList")
  taskList.innerHTML=""

  let task = JSON.parse(localStorage.getItem("Task"))
   
    const filteredItem = task.filter((ele)=> ele.category == category )
   

        filteredItem.forEach((ele,index) => {
      let div = document.createElement("div")
      let p=  document.createElement("p")
      p.innerText = ele.text
    

      let checkBox = document.createElement("input")
      checkBox.type ="checkbox"

      let deletebtn = document.createElement("button")
      deletebtn.innerText= "Delete"
      deletebtn.id="deletebtn"

       deletebtn.addEventListener("click", () => {
      deleteTask(index);
    });

      const taskCategory=  document.createElement("h4")
      taskCategory.innerText = ele.category
    

       div.append(p,checkBox,deletebtn,taskCategory)
      taskList.appendChild(div)
      
    });
    
 }
 