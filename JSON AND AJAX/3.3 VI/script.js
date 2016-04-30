var xmlhttp;

function createObject() 
{
	var song = document.getElementById("song").value;
	var artist = document.getElementById("artist").value;
	var year = document.getElementById("year").value;
	var rating = document.getElementById("rating").value;

var jsonSong = '{';
		jsonSong += ' "song" :' + '"' + song + '"';
		jsonSong += ",";
		jsonSong += ' "artist" :' + '"' + artist + '"';
		jsonSong += ",";
		jsonSong += ' "year" :'+ '"' + year + '"';
		jsonSong += ",";
		jsonSong += ' "rating" :' + '"' + rating + '"';
	jsonSong += "}";

	//console.log(jsonSong);

	sendJson(jsonSong);
}	

function sendJson(jsonSong) 
{
	xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = receivesResponse;
	xmlhttp.open("GET", "receivesJSON.php?json="+jsonSong, true);	
	xmlhttp.send();
}

function receivesResponse() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
	{
		var jsonResponse = xmlhttp.responseText;
		document.getElementById('result').innerHTML = jsonResponse;
	}
}