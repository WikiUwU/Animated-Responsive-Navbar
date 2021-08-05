const themeButton = document.querySelector("#themeButton");
const body = document.body;



// Apply the cached theme on reload

const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.remove("light");
    body.classList.add(theme);
}



// Button Event Handlers(change theme)

themeButton.onclick = () => {
    if (body.classList.value === "light") {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
    } else if (body.classList.value === "dark") {
        body.classList.replace("dark", "solar");
        localStorage.setItem("theme", "solar");
    } else {
        body.classList.replace("solar", "light");
        localStorage.setItem("theme", "light");
    }
};
