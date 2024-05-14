const name = "hitesh"
const repoCount = 50

// console.log(name +repoCount +"value") ;

console.log (`Hello my name is ${name} and my repo count is ${repoCount}`);
// console.log(name[0]);

const gameName = new String ('hitesh')
console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName._proto_);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-5,4)
console.log(anotherString);

const newStringOne = "   sandeep    "
console.log(newStringOne);
console.log(newStringOne.trim());


// const url = "https://hitesh.com/hitesh20%choudhary"

// // console.log(url.replace('/%20/g',_'));
// console.log(url.replace(/%20/g, '_'));
const url = "https://hitesh.com/hitesh20%choudhary";

console.log(url.replace('%20', '_'));



