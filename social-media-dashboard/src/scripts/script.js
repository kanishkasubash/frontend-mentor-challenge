const btn = document.querySelector("#toggle");
const prefersSchemeDark = window.matchMedia("(prefers-color-scheme: dark)");
const prefersSchemeLight = window.matchMedia("(prefers-color-scheme: light)");

btn.addEventListener("change", function () {
    if (prefersSchemeDark.matches) {
        document.body.classList.toggle("light-mode");
    } else {
        document.body.classList.toggle("dark-mode");
    }
});

prefersSchemeLight.onchange = (e) => {
    if (e.matches) {
        btn.checked = true;
    } else {
        btn.checked = false;
    }
};