var a=[1,2,3],b=[3,2,1];
var sum=0;
for(i in a){
	sum += a[i]*b[i];
}

console.log("a dot b=%d",sum);