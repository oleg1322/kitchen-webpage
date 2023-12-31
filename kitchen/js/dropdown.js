let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    
    let dropdownButton = dropdown.querySelector(".dropdown-button");

    dropdownButton.addEventListener("click", () => {
        if( dropdown.classList.contains("_active") ){
            dropdown.classList.remove("_active");
        } else{
            dropdowns.forEach((dropdown) => dropdown.classList.remove("_active"));
            dropdown.classList.add("_active");
        }
    })
});
