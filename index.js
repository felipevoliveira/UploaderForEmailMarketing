
const { clipboard } = require('electron')



document.getElementById("copiar").addEventListener("click", function(){
    
    clipboard.writeText(document.getElementById("link").value, 'selection')
    
});
