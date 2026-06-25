import {phoneNumber} from "../src/validators/phoneNumber"
console.log(phoneNumber("+254712345678"));
console.log(phoneNumber("+14155552671"));
console.log(phoneNumber("+447911123456"));
console.log(phoneNumber("254712345678"));
console.log(phoneNumber("+254ABC123456"));
console.log(phoneNumber("+254 712345678"));
console.log(phoneNumber("+254-712345678"));
console.log(phoneNumber("+2547"));
console.log(phoneNumber("+254712345678999999"));
console.log(phoneNumber(null));
console.log(phoneNumber(undefined));
console.log(phoneNumber(12345));
 console.log(phoneNumber(""));
