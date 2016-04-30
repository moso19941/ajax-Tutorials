var xmlhttp;

function drawSquare() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = callback;

	var rows = document.getElementById("rows").value;
	var cols = document.getElementById("cols").value;

	// using GET ****

	// var url = "squareService.php?rows=" +rows+"&cols="+cols;
	// //open connection
	// //console.log(url);
	// xmlhttp.open("GET", url, true);
	// xmlhttp.send();


	// using POST ****
	var url = "squareService.php";
	xmlhttp.open("POST", url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("rows=" +rows+"&cols="+cols);
}

function callback() {
	if(xmlhttp.readyState == 4|| xmlhttp.status == 200){
		document.getElementById('results').innerHTML = xmlhttp.responseText;
	}
}