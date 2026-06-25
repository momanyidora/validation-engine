import { password } from "../src/validators/password";

console.log(password("Password1!"));
console.log(password("StrongPass9#"));

console.log(password("pass"));
console.log(password("password"));
console.log(password("Password"));
console.log(password("Password1"));
console.log(password(""));
console.log(password(null));
