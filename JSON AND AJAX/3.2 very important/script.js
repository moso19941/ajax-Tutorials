var xmlhttp;

function makeCall() {
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = infoReturned;
	xmlhttp.open("GET", "json.php",true);
	xmlhttp.send();
	//alert("in makeCall");
	//document.write("in makeCall");
}

function infoReturned() {
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		//console.log(xmlhttp.responseText);

		var jsonResponse = xmlhttp.responseText;
		jsonResponse = eval("(" + jsonResponse + ")");
		
		var output="";
		output += "First Name: " + jsonResponse.firstname;
		output += "Last Name: " + jsonResponse.lastname;
		output += "Course: " + jsonResponse.Course;
		output += "Age: " + jsonResponse.Age;

		document.getElementById('result').innerHTML = output;
	}
}