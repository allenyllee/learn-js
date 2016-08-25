function min(){
	var m = arguments[0];
	for(var i in arguments){
		if (arguments[i] < m)
			m = arguments[i];
	}
	return m;
}

var x = min(3,7,2,9,1,5,8);
console.log("x=min(3,7,2,9,1,5,8)=",x);