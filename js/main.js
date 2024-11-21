const themeColorBtns = document.querySelectorAll(".theme-btn");

themeColorBtns.forEach(themeColorBtn => {
    themeColorBtn.addEventListener("click", event => {
        removeActiveClass();
        event.target.classList.add("active");
        localStorage.setItem("theme", event.target.dataset.theme);
        document.documentElement.setAttribute("data-bs-theme", event.target.dataset.theme)
    })
});

const removeActiveClass = () => {
    themeColorBtns.forEach(themeColorBtn => {
        themeColorBtn.classList.remove("active")
    })
};

window.addEventListener("load", () => {
    let savedThemeMode = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-bs-theme", savedThemeMode)
})