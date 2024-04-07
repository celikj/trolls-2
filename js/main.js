
document.addEventListener("DOMContentLoaded", function() {
  var colorNumber = Math.floor(Math.random() * 7) + 1;
  document.getElementsByTagName('body')[0].classList.add('color-' + colorNumber);
});

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 13) {
		calculate();
	}
});