// Write your code here!
const main = document.querySelector('main#main') //this selects the specified line
//console.log(main)
main.parentElement.removeChild(main); //this tells it to delete that line
const newHeader = document.createElement('h1') //don't forget the '' && remember importance of document.createElement()
newHeader.id = "victory" //this syntax of element.append
newHeader.innerHTML = "Parker is the champion" //innerHTML allows us to set the HTML value of a property
// newHeader.textContent = "Parker is the champion" //This line also passes the test!