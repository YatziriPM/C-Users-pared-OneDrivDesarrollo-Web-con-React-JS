const text = "Hola Mundo!"

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input");
    const button = document.querySelector("#button");
    const list = document.querySelector("#list");

    button.addEventListener("click", () => {
     const li = document.createElement("li");
     const button = document.createElement("button");
     button.textContent = "Delete";
     li.textContent = input.value;
     
     li.addEventListener("click", () => {
        alert("Task " + li.textContent + " Done");
        li.style.textDecoration = "line-through";
    });
   
     list.appendChild(li);
     list.appendChild(button);

     button.addEventListener("click", () => {
        li.remove();
        button.remove();
    });
   
    });

});
