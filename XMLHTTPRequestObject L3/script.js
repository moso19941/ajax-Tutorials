var xmlhttp;

function getNum() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = callback;

	//open connection
	xmlhttp.open("GET", "random.php", true);
	xmlhttp.send();
}

// when information come back from the servier
function callback() {
	console.log("readyState : " + xmlhttp.readyState + "\nstatus "+ xmlhttp.status);
	if(xmlhttp.readyState == 4|| xmlhttp.status == 200){
		document.getElementById('result').innerHTML = xmlhttp.responseText;
	}
}