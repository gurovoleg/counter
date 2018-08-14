var counter = (function(){
	var _value = 0;
	
	var setValue = function(income){
		if(_checkInteger(income)) _value = income;
		else console.log('Введите пожалуйста целое число');
	}
	
	var _checkInteger = function(a){
		if (Number.isInteger(a)) return true;
		else return false;
	}
	
	var increaseCounter = function(){
		_value++;
	}
	
	var decreaseCounter = function(){
		_value--;
	}
	
	var printCounter = function(){
		console.log(_value);
	}
	
	return {
		setValue,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}());

// counter.printCounter();
counter.setValue(1);
counter.printCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.printCounter();
counter.decreaseCounter();
counter.printCounter();
