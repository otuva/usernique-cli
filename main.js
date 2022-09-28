const vowels = ["a","e","i","o","u"];
const consanants = ["b","c","d","f","g","h","j","k","l","m","n","p","r","s","t","v","w","x","y","z"];
const modifiers = [
	function(s,i) { // th
		return (i && "dtsgjckpr".indexOf(s.substr(s.length-1),1) > -1?'u':false);
	},
	function(s) { // ea
		return (s.substr(s.length-1,1)=='e'?'u':false);
	},
	function(s,i) { // au / ou
		return (i && "oa".indexOf(s.substr(s.length-1,1)) > -1?'u':false);
	},
	function(s,i,l) { // aux
		return (s.substr(s.length-1,2)=='au' && l-i===1?'x':false);
	},
	function(s,i,l) { // ending y
		return (l-i===1?'y':false);
	}
];

const length = 3 + Math.floor(Math.random()*7);
var username = "";

for(var i = 0; i < length; i++) {
	var letter = "";
	var mod = modifiers[Math.floor(Math.random()*modifiers.length)](username,i,length);
	if (mod) {
		i += mod.length;
        username = username + mod;
	} else if(vowels.indexOf(username.substring(username.length-1,1)) < 0) {
		letter = vowels[Math.floor(Math.random()*vowels.length)];
	} else {
		letter = consanants[Math.floor(Math.random()*consanants.length)];
	}
	username = username + letter;
}

console.log(username);