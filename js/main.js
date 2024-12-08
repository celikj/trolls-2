
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
	return Number((n + 1e-11).toPrecision(f));
}

function berken(a, b, c){
	return (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c))/(2*a);
}

function berkenn(n){
	let prefix = '';
	let postfix = '';

	n = n.replaceAll(' ', '');
	n = n.replace(',', '.');

	if(n.includes('*')){
		prefix = '*';
	}
	else if(n.includes('×')){
		prefix = '×';
	}
	else if(n.includes('e')){
		prefix = 'e';
	}
	else{
		return Number(n);
	}

	if(n.includes('^^')){
		postfix = '^^';
	}
	else if(n.includes('^')){
		postfix = '^';
	}
	else if(n.includes('e')){
		postfix = 'e';
	}
	else{
		return Number(n);
	}

	power = Number(n.slice(n.indexOf(postfix) + postfix.length));
	num = Number(n.slice(0, n.indexOf(prefix)));
	
	return num * Math.pow(10, power);
}

function pow(n, k){
	return Math.pow(n, k);
}

function sqrt(n){
	return Math.pow(n, 0.5);
}

function sqr(n){
	return Math.pow(n, 2);
}

function dsin(a){
	return Math.sin(a/180*Math.PI);
}

function dcos(a){
	return Math.cos(a/180*Math.PI);
}
