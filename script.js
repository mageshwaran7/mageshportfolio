const menu=document.querySelector("#menu");
const nav=document.querySelector(".links");
const links=document.querySelectorAll(".links a");

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

links.forEach((link)=>{
    link.addEventListener("click",()=>{
        menu.classList.remove('bx-x');
        nav.classList.remove('active');
    });
});


// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[type='text']");

  // Clear placeholder on focus
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.placeholder = "";
    });

    input.addEventListener("blur", () => {
      // Reset placeholder if input is empty
      if (input.value.trim() === "") {
        if (input.name === "name") input.placeholder = "Enter Your Full Name";
        else if (input.name === "email") input.placeholder = "Enter Your E-mail";
        else input.placeholder = "Enter Your Message";
      }
    });
  });

  // Clear all inputs on submit
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent real submission
    inputs.forEach((input) => {
      input.value = "";
      input.placeholder = "Enter " + input.previousElementSibling.textContent;
    });
  });
});















