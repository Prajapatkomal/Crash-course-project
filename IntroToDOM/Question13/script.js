const colorbtn = document.getElementById("colorbtn");
  colorbtn.addEventListener("click", () => {
    const colorinput = document.getElementById("colorinput");
    const div = document.getElementById("div");

    if (isValidColor(colorinput.value)) {
      div.style.backgroundColor = colorinput.value;
    } else {
      alert("Enter valid color!");
    }

    colorinput.value = "";
  });

  function isValidColor(color) {
    const temp = document.createElement("div");
    temp.style.color = color;
    return temp.style.color !== "";
  }

  const textbtn = document.getElementById("textbtn");
  textbtn.addEventListener("click", () => {
    const textinput = document.getElementById("textinput");
    const div = document.getElementById("div");
    if (textinput.value == "") {
      alert("Please enter some text!");
    } else {
      div.innerText = textinput.value;
    }
    textinput.value = "";
  });