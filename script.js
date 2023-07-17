const addInput = document.querySelector(".add-input");
const addButton = document.querySelector("form button");

// Activate and deactivate input button
addInput.addEventListener("keyup", (e) => {
    e.preventDefault();
    let userData = addInput.value;
    if(userData.trim() != 0) {
        addButton.classList.add("active");
    } else {
        addButton.classList.remove("active");
    }
});