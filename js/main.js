
document.addEventListener("DOMContentLoaded", function() {
  var colorNumber = Math.floor(Math.random() * 7) + 1;
  document.getElementsByTagName('body')[0].classList.add('color-' + colorNumber);
});

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 13) {
		calculate();
	}
});

function selim(n, f) {
	let nSig= Number(n.toPrecision(f));
	let nExp = nSig.toExponential();
	return nExp.replace(/e\+?/,'*10^');
}

function mert(n, f) {
	return Number(n.toPrecision(f));
}
