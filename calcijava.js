
function formtable()
{    
    document.write("<table border=1>");
    document.write('<tr><th><input type="text" size="5" id="result"/></td></tr>');
    for(let i=1;i<=9;i++)
    {
        if(i%3==1)
        { 

            /manvitha added this line
            document.write("<tr>");
        }
        document.write("<td>",i,"</td>");
        if(i%3==0)
        {
            if(i==3)
            {
                document.write("<td><button  onclick='show(/)'>/</button></td>");
            }
            if(i==6)
            {
                document.write("<td><button  onclick='show(*)'>*</button></td>");
            }
            if(i==9) {
                document.write("<td><button  onclick='show(+)'>+</button></td>");
                document.write("<tr><td><button onclick='show(value)'>-</button></td>")
                document.write("<td><button  onclick='show(.)'>.</button></td>");
                document.write("<td><button  onclick='show(0)'>0</button></td>");
                document.write("<td><button  onclick='cal()'>=</button></td></tr>");
                
            }

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

