function login() {
    const nameEl = document.querySelector("#name");
    if (nameEl.value === "") {
        localStorage.setItem("pizzaName", "Anonymous");
    } else {
        localStorage.setItem("pizzaName", nameEl.value);
    }
    window.location.href = "play.html";
}