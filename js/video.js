var video= document.getElementById('player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML=video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate*=0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate/=0.95;
	console.log("New speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	
	console.log("Original Location " + video.currentTime);
	video.currentTime=video.currentTime+15;
	if (video.currentTime===67.403333){
		video.currentTime=0
		console.log("Going back to beginning");
	}
	console.log("New Location " + video.currentTime);
});