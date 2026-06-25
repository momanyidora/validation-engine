import { email } from "../src/validators/email";

console.log(email("dorah@gmail.com"));
console.log(email("DORAH@gmail.com"));

console.log(email("dorah@gmail"));
console.log(email("@gmail.com"));
console.log(email("dorah gmail.com"));
console.log(email(""));
console.log(email(null));
