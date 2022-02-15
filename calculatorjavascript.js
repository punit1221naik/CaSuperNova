function addTable() {
     document.write("<link rel='stylesheet' typee='text/css' href='calculator.css' />");
     document.write("<table border=1 id=table>")
     document.write('<tr><th colspan=3><input name="input" size="26" id="text"></th>')
     document.write("<td><button class='button' onclick='clearScreen()'>c</button></td></th>")

	     for(let i=1; i<=9;i++) {
		           if(i%3==1) {
		             	document.write("<tr>");
		                      }    
		           document.write('<td><button class="button" value="' , i , '" onclick=display(this.value)>',i,'</td>');
		           if(i%3==0) {
		 	        if(i==3)  {
		 		   document.write("<td><button class='button' value=/ onclick='display(this.value)'>/</button></td>")
                              }
		 	       if(i==6) {
		 		   document.write("<td><button class='button' value=* onclick='display(this.value)'>*</button></td>")
		 	                 }
		 	       if(i==9)
		 	{
		 		document.write("<td><button class='button' value=+ onclick='display(this.value)' id='btn'>+</button></td></tr>");
		 		document.write("<tr><td><button class='button' value=. onclick='display(this.value)'>.</button></td>");
		 		document.write("<td><button class='button'  onclick='display(0)'>0</button></td>")
		 		document.write("<td><button class='button' value=- onclick='display(this.value)'>-</button></td>")
		 		document.write("<td><button class='button' onclick='cal()'>=</button></td></tr>");
		 	}

		 }   
   }
  }
  function clearScreen() {
 document.getElementById("text").value = "";
}

function display(value) {
document.getElementById("text").value+=value;
 console.log("ans",document.getElementById("text").value);
}

function cal() {
 var val = document.getElementById("text").value;
 var res = eval(val);
 document.getElementById("text").value = res;
 console.log("res",document.getElementById("text").value)
}