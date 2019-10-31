//selection de tout les elements comportant le nom de class 'color'
var colorSelection = document.getElementsByClassName('color');


for(let i = 0; i < colorSelection.length; i++) {
  // pour chacun, ajouter un evenListener avec comme evenement un click
  colorSelection[i].addEventListener("click", function() {
        //si on click sur un des elements, recuperer le nom de la class. (ex 'color red)
        var className = colorSelection[i].className;  
        // decouper ce nom en 2, en utilisant un espace comme séparateur. 
        //Chaque element est placé dans un array nomé 'color'
        //classname = 'color red' 
        var color = className.split(' '); // (array color => color[0] = 'color' et color[1] = 'red')
        //attribuer la couleur a l'element dont l'id est 'text' (donc le paragraphe)
        // et utiliser le deuxieme element de l'array comme couleur ( ex: red ) 
        document.getElementById('text').style.color = color[1];
        
  })
}
 


