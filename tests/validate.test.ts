import { validate } from "../src/validate";

import { required } from "../src/validators/required";
import { email } from "../src/validators/email";
import { password } from "../src/validators/password";

console.log(validate("dorah@gmail.com", [required, email]));

console.log(validate("", [required, email]));

console.log(validate("hello", [required, email]));

console.log(validate("password", [required, password]));
