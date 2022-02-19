function addTable() {
	document.write("<link rel='stylesheet' type='text/css' href='calculator.css' />");
       document.write('<table id="table">');
       document.write('<tr><th colspan=3><input name="input" size="26" id="text"></th>');
       document.write('<th><button class="button" value="C" onclick="clearScreen()">C</button></th></tr>');
       document.write('<td><button class="button" onclick=cal()>=</button></td>');
       var arr=[1,2,3,'/',4,5,6,'*',7,8,9,'+','.',0,'-'];
       for(let i=1;i<=arr.length;i++) {
         if(i%4==1) {
            document.write('<tr>');
        }
          document.write('<td><button class="button" value=' , arr[i-1] , ' onclick=display(this.value)>',arr[i-1],'</button></td>');    
          if(i%4==0) {
            document.write('</tr>');
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