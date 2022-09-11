let string = "";
document.querySelector("input").value ="0";
let button = document.querySelectorAll(".button");
console.log(button);
Array.from(button).forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
      string = "";
    } else if (e.target.innerHTML == "C" ||e.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + e.target.innerHTML;
     document.querySelector("input").value = string;
      

    }
  });
});
