var xmlhttp;

function displayInfo() {

	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = callback;

	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;

	var url = "info.php?name="+name+"&age="+age;
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}

function callback() {

	if(xmlhttp.readyState == 4|| xmlhttp.status == 200){
		document.getElementById('results').innerHTML = xmlhttp.responseText;
	}

}