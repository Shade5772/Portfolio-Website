function sendButton() {
    const textInput = document.getElementById("textInput");
    textInput.value = textInput.value.innerHTML = "";
}

function sendConsole() {
    const textBox = document.getElementById("textInput");
    var comment = textBox.value;
    console.log(comment);
}
