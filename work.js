let txt = 'alogatoad';
// Create an email pattern
let emlPat = /^[a-zA-Z0-9_]{3,12}@(mail|gmail|yahoo)\.(com|net|tech|edu)$/;

// Create a username pattern
let usrName = /^[a-z]{5,9}$/;

// Create a Bangladeshi phone number pattern
let num = /^(\+8801|0118801|01)[0-9]{9}$/;

// Create a password pattern
let pass = /^[A-Za-z0-9~!@#$%&*^?-_]{6,18}$/;
// Create a zipcode pattern
let zip = /^[0-9]{5}$/;

console.log(zip.test(txt));
