function hide_elements(id) {
    switch (id) {
        case 'normal':
            for (elem of document.getElementsByClassName("hidden_1")) {
                elem.classList.add("hidden");
            }
            for (elem of document.getElementsByClassName("hidden_2")) {
                elem.classList.add("hidden");
            }
            break;
        case 'long':
            for (elem of document.getElementsByClassName("hidden_1")) {
                elem.classList.remove("hidden");
            }
            for (elem of document.getElementsByClassName("hidden_2")) {
                elem.classList.add("hidden");
            }
            break;
        case 'too_much':
            for (elem of document.getElementsByClassName("hidden_1")) {
                elem.classList.remove("hidden");
            }
            for (elem of document.getElementsByClassName("hidden_2")) {
                elem.classList.remove("hidden");
            }
            break;
    }
}

hide_elements(document.querySelector('input[name="visibility"]:checked').value);



document.getElementById("visibility_buttons").addEventListener('change', function (e) {
    hide_elements(document.querySelector('input[name="visibility"]:checked').value);
});
