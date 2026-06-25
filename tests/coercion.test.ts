import { validate } from "../src/validate.js";
import { email } from "../src/validators/email.js";

console.log(validate("  STUDENT@EXAMPLE.COM  ", [email], { coerce: true }));
console.log(validate("  hello@example.com  ", [email], { coerce: true }));
console.log(validate("  hello@example.com  ", [email], { coerce: true }));