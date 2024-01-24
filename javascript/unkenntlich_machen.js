function updateText() {
  var text = document.getElementById("un­kenntlich");
  var newText = "";
  for (var i = 0; i < text.textContent.length; i++) {
    newText += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  text.textContent = newText;
}

setInterval(updateText, 50);
