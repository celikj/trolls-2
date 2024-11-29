
document.addEventListener("DOMContentLoaded", function() {
  var colorNumber = Math.floor(Math.random() * 7) + 1;
  document.getElementsByTagName('body')[0].classList.add('color-' + colorNumber);
});

document.addEventListener('keydown', function(e) {
	if (e.keyCode == 13) {
		calculate();
	}
});

function selim(n, f) { //sigfig + sci_notation
	let nSig= Number(n.toPrecision(f));
	let nExp = nSig.toExponential();
	return nExp.replace(/e\+?/,'*10^');
}

function mert(n, f) { //sigfig
	return Number(n.toPrecision(f));
}

function berken(a, b, c){
	return (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
}
