const url = "https://api.quotable.io/random";
function newquote() {
  fetch(url)
    .then((x) => x.json())
    .then((response) => {
        /*
        document.querySelector(".quote-data").textContent = JSON.stringify(
            response,
            null,
            "  "
        );
        */
        document.querySelector(".quote").textContent = "\"".concat(response.content,"\" -", response.author);
    });
}
newquote();