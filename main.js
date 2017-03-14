/* eslint-disable no-unused-vars */

var text = 'The fox is quick.'

for (var i = 0; i < text.length; i++) {
  var $letter = document.createElement('span') // Create span element
  $letter.textContent = text[i]                // Getting letter out of text
  document.body.appendChild($letter)           // Add span to body of document
}
  var $firstLetter = document.querySelector('span')  //Assign reference to the first span
  $firstLetter.classList.add('current')              //Change class name to 'current'
