// import { required } from "./validators/required"

// console.log(required("Dora"));
// console.log(required(""));
// console.log(required(null));
// console.log(required(undefined))
// console.log(required(0));
// console.log(required(false))


// import {email} from "./validators/email"

// console.log(email("dorah@gmail.com"))
// console.log(email("@gmail.com")); 
// console.log(email("dorah gmail.com")); 
// console.log(email("   ")); 
// console.log(email(null)); 
// console.log(email(undefined)); 
// console.log(email(123));                    

import {phoneNumber} from "./validators/phoneNumber"
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
