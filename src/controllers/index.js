
const { clipboard } = require('electron')



document.getElementById("copiar").addEventListener("click", function(){
    
    clipboard.writeText(document.getElementById("link").value, 'selection')
    
});

function upload(){
    alert("valeu");
    console.log("Deu certo!!!!!!!!!!!!");
}