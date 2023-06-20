const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/code-geass-symbol.jpg") {
    myImage.setAttribute("src", "images/steinsGate.jpg");
  } else {
    myImage.setAttribute("src", "images/code-geass-symbol.jpg");
  }
};
//////////////////////////////////////////////////////
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mad Scientist is Cool, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `El Psy Congroo, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
      
