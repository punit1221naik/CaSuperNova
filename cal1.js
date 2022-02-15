<script type="text/javascript">
function clr()
{
     	document.getElementById("result").value="";
}
function show(input)
{
    	 document.getElementById("result").value+=input;
}
function cal()
{
	 var out=eval(document.getElementById("result").value);
	document.getElementById("result").value=out;
}
</script>