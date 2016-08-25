function print(){
	for(var i in arguments){
		console.log(i, ":", arguments[i]);
	}
}

print(3, 2.71828, "hello");
