let darkmode = document.getElementById('darkmodebtn')

darkmode.onclick = function(){
document.body.classList.toggle('dark')
}
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", function () {

    const darkModeBtn = document.getElementById("darkmodebtn");

    function updateButtonText() {
        if (document.body.classList.contains("dark")) {
            darkModeBtn.textContent = "☀️ الوضع النهاري";
        } else {
            darkModeBtn.textContent = "🌙 الوضع الليلي";
        }
    }

    updateButtonText();

    darkModeBtn.onclick = function () {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateButtonText();
    };

});