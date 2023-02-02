
const nam1 = prompt("Enter your first name:");
const nam2 = prompt("Enter your last name:");
const nam3 = nam1 + nam2
alert(`Your full name is; ${nam1}  ${nam2}, and your username is; ${nam3}`);

const nam1s = nam1.slice(0,1);
const nam2s = nam2.slice(0,4)
const unam = nam1s + nam2s

const lower = unam.toLocaleLowerCase();
rnumber = Math.floor(Math.random()*100) + 1

document.getElementById("challenge").innerHTML = (lower + rnumber);