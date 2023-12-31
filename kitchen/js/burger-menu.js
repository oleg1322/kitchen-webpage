function menuBurgerInit() {
    const menuMain = document.querySelector(".header-menu");
    const menuBurgerButton = document.getElementById("burger-button");

    menuBurgerButton.addEventListener('click', () => {
        menuMain.classList.toggle('show')
    });

    document.body.addEventListener("click", (event) => {
        if (event.target !== menuMain && event.target !== menuBurgerButton) { menuMain.classList.remove("show") };
    })

    menuMain.addEventListener("click", () => menuMain.classList.remove("show"));
}

addEventListener("DOMContentLoaded", function(){
    menuBurgerInit();
})