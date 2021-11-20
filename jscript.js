function ChangeLeft() {
	document.getElementsByClassName('left')[0].style.width = "579px";
	document.getElementsByClassName('right')[0].style.width = "35px";
	document.getElementsByClassName('right_image')[0].style.display = "none";
	document.getElementsByClassName('left_image')[0].style.display = "block";
	document.getElementsByClassName('left_image')[0].style.width = "350px";
}

function ChangeBoth() {
	document.getElementsByClassName('left')[0].style.width = "307px";
	document.getElementsByClassName('right')[0].style.width = "307px";
	document.getElementsByClassName('left_image')[0].style.display = "block";
	document.getElementsByClassName('right_image')[0].style.display = "block";
	document.getElementsByClassName('right_image')[0].style.width = "285px";
	document.getElementsByClassName('left_image')[0].style.width = "285px";
}

function ChangeRight() {
	document.getElementsByClassName('right')[0].style.width = "579px";
	document.getElementsByClassName('left')[0].style.width = "35px";
	document.getElementsByClassName('left_image')[0].style.display = "none";
	document.getElementsByClassName('right_image')[0].style.display = "block";
	document.getElementsByClassName('right_image')[0].style.width = "350px";
}