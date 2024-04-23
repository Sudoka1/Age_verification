// Suche das erste <div>-Element innerhalb von #content und ändere dessen Hintergrundfarbe.
var firstDivElement = document.querySelector('#content > div');
firstDivElement.style.backgroundColor = 'lightblue';

// Finde das <span>-Element und füge einen Rahmen hinzu.
var spanElement = document.querySelector('#content span');
spanElement.style.border = '2px solid black';

// Wähle alle <li>-Elemente innerhalb von #content aus, prüfe ob sie die Klasse item haben, und ändere ihren Text, wenn sie die Klasse nicht haben.
var liElements = document.querySelectorAll('#content li');
liElements.forEach(function(li) {
  if (!li.classList.contains('item')) {
    li.textContent = 'Ein neuer Text für dieses Element';
  }
});

// Finde das nächstgelegene Elternteil des <strong>-Elements innerhalb von #paragraph und ändere dessen Textfarbe.
var strongElement = document.querySelector('#paragraph strong');
var parentElement = strongElement.parentElement;
parentElement.style.color = 'red';

// Erstelle ein neues <li>-Element und füge es am Ende der Liste hinzu. Gib ihm den Text "Vierter Punkt".
var newLiElement = document.createElement('li');
newLiElement.textContent = 'Vierter Punkt';
var ulElement = document.querySelector('#content ul');
ulElement.appendChild(newLiElement);