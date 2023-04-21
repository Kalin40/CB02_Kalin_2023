var iReg = '', aReg = '', oReg = '';// input register, accumulator register and previous selected operation register
var digitsEnabled = true;


function updInputReg(key) {
	if (!digitsEnabled) {
		return;
	}
	if (key == '.' && iReg.indexOf('.') == -1) {
		// add decimal point only if there is no decimal point already in iReg
		iReg = iReg + key;
	} else if (key != '.') {
		// concatenate the current input with the key
		iReg = iReg + key;
	}

	document.querySelector('#out').innerText = iReg;
}

function opKeyPressed(key) {
	console.log('operator key pressed', key);
	let iRegV = iReg - 0, aRegV = aReg - 0, res;//place the numeric value of iReg in iRegV, and the numeric value of aReg in aRegV
	console.log('iReg and aReg numbers', iRegV, aRegV);

	if (key == '%') {
		res = aRegV * (iRegV / 100);
		iReg = res + '';
		digitsEnabled = false;
		console.log('percentage result', res);
		return;
	}

	switch (oReg) {
		case '-'://subtract iRegV from aRegV and store it res
			res = aRegV - iRegV;
			console.log('subtraction result', res);
			break;
		case '+'://add iRegV to aRegV and store it in res
			res = aRegV + iRegV;
			console.log('addition result', res);
			break;
		case '*'://times iRegV to aRegV and store it in res
			res = aRegV * iRegV;
			console.log('multiplication result', res);
			break;
		case '/'://divide iRegV to aRegV and store it in res
			if (iRegV == 0) {
				res = "Can't divide by zero";
			} else {
				res = aRegV / iRegV;
			}
			console.log('division result', res);
			break;
		/*case '&#x232B;': //delete the last character from iReg
			if (iRegV == '&#x232B;') {
				iReg = iReg.substring(0, iReg.length - 1);
			}
			console.log('iReg after deletion', iReg);
			break;*/
		default://nothing better to do	
			res = iRegV;
			console.log('no better to do result', res);
	};

	digitsEnabled = true;
	aReg = res + '';//convert the result to a string and store it in aReg=
	oReg = key;//keep the key for the next time we needed it
	iReg = '';//clear the input register so that the user can enter the next number

	document.querySelector('#out').innerText = aReg;//Display aReg on the LCD.
	console.log('here the user should see ', aReg, 'on the screen');
}


function clearAll() {
	iReg = '';
	aReg = '';
	oReg = '';
	digitsEnabled = true;
	document.querySelector('#out').innerText = '0';
}

function deleteLastDigit() {
	iReg = iReg.slice(0, -1);
	document.querySelector('#out').innerText = iReg || '0';
}

document.addEventListener('keydown', function (event) {
	const key = event.key;
	if (/\d/.test(key)) {
		updInputReg(parseInt(key));
	} else if (key === '.') {
		updInputReg('.');
	} else if (key === '+' || key === '-' || key === '*' || key === '/') {
		opKeyPressed(key);
	} else if (key === '%' || key === 'Enter') {
		opKeyPressed(key === '%' ? '%' : '=');
	} else if (key === 'Escape') {
		clearAll();
	} else if (key === 'Backspace') {
		if (iReg == '') return;
		iReg = iReg.slice(0, -1);
		document.querySelector('#out').innerText = iReg || '0';
	}
});

document.querySelector('#clear').addEventListener('click', function () {
	clearAll();
});
