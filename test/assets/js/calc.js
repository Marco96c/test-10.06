function numero(a){ 
    document.getElementById("operazioni").value += a;
 }

 function operatore(a){ 
    document.getElementById("operazioni").value += a;
 }
 
 function operazione() { 
 document.getElementById("operazioni").value = eval(document.getElementById("operazioni").value); 
 }
 
 function cancella() { 
  document.getElementById("operazioni").value = " "; 
 }
 function canzone(){
   document.getElementById("rick").play()
}