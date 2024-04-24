// Benutzerdaten abfragen
var name = prompt("Bitte geben Sie Ihren Namen ein:");
var age = parseInt(prompt("Bitte geben Sie Ihr Alter ein:"));

// Begrüßung anpassen
var greetingElement = document.getElementById("greeting");
greetingElement.textContent = "Hallo, " + name + "!";

// Altersprüfung
try {
  if (age < 18) {
    throw "Du bist zu jung, um den Inhalt zu sehen!";
  } else {
    // Altersabhängige Nachricht
    var ageMessageElement = document.getElementById("ageMessage");
    ageMessageElement.textContent = "Du darfst den Inhalt sehen!";
    ageMessageElement.style.backgroundColor = "green";
  }
} catch (error) {
  console.error(error);
  // Altersabhängige Nachricht
  var ageMessageElement = document.getElementById("ageMessage");
  ageMessageElement.textContent = error;
  ageMessageElement.style.backgroundColor = "red";
}