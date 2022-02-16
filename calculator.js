
function formtable()
{    
    document.write("<link rel='stylesheet' type='text/css' href='calculator.css'/>");
    document.write("<table border=1>");
    document.write('<tr><th colspan=2><input name="textbox" type="text" size="10" id="result"/></td></tr>');
    document.write('<th><button class="button" value="C" onclick="clr()">C</button></th></tr>');
    document.write('<td><button class="button" onclick=cal()>=</button></td>');
    var arr=[1,2,3,'/',4,5,6,'*',7,8,9,'+','.',0,'-'];
    for(let i=1;i<=arr.length;i++) {
        if(i%4==1) {
            document.write('<tr>');
        }
          document.write('<td><button class="button" value=' , arr[i-1] , ' onclick=show(this.value)>',arr[i-1],'</button></td>');    
          if(i%4==0) {
            document.write('</tr>');
        }
    }
} 

function clr() {
     	document.getElementById("result").value="";
}

function show(input) {        
    	 document.getElementById("result").value+=input;
         console.log("ans",document.getElementById("result").value);
}

function cal() {
	 var out=eval(document.getElementById("result").value);
	document.getElementById("result").value=out;
    console.log("res",document.getElementById("result").value);
}

