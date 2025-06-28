const ol = document.querySelector("#list")
    const btn = document.getElementById("btn")
    btn.addEventListener("click",()=>{
        li = document.createElement("li")
        const seqNum = ol.children.length + 1;
        li.innerText= "New Item"
        if(seqNum %2 == 1){
            li.style.color="blue"
            li.style.fontWeight ="bold"
        }else{
            li.style.color= "red"
            li.style.fontStyle= "italic"
        }

        ol.append(li)
        
    })