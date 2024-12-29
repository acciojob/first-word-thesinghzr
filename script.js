function firstWord(s) {
	let str=s.trim();
	if(str.length==0)
		return str;
	let res="";
	for(let i=0;i<str.length;i++){
		if(str[i]==" ")
			break;
		else
			res+=str[i];
	}
	return res;
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));