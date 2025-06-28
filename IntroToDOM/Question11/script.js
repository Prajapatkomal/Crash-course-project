const h1 = document.getElementById("first")
    h1.innerText = "Welcome to the DOM World!"

    const para =  document.getElementsByTagName("p")
    Array.from(para).forEach(ele => {
         ele.style.color="blue"
    });
 
 

    const div = document.querySelector(".container")
    div.style.backgroundColor= "yellow"