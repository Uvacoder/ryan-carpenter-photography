// Get the modal
let modal = document.getElementById('myModal');

let img = querySelector('img');

function openModal() {
	document.getElementById('myModal').style.display = 'block';
}

// Get the image and insert it inside the modal - use its "alt" text as a caption
//document.getElementById("myImg");
var img = document.querySelectorAll('img');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function() {
	modal.style.display = 'block';
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

//Get the image that a user clicks on

//add that image to the modal

//display the modal
