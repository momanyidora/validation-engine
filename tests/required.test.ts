import { required } from "../src/validators/required";

console.log(required("Dorah"));
console.log(required("Hello"));

console.log(required(""));
console.log(required(" "));
console.log(required("     "));
console.log(required(null));
console.log(required(undefined));
