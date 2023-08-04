const toggle = document.querySelector("#toggle");
const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentMode = localStorage.getItem("mode");

if (currentMode == "dark") {
    document.body.classList.toggle("dark-mode");
} else if (currentMode == "light") {
    document.body.classList.toggle("light-mode");
}

toggle.addEventListener("change", function () {
    var mode;
    if (prefersColorScheme.matches) {
        document.body.classList.toggle("light-mode");
        mode = document.body.classList.contains("light-mode")
            ? "light"
            : "dark";
    } else {
        document.body.classList.toggle("dark-mode");
        mode = document.body.classList.contains("dark-mode")
            ? "dark"
            : "light";
    }
    localStorage.setItem("mode", mode);
});