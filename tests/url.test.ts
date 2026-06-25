import { url } from "../src/validators/url";

console.log(url("https://example.com"));
console.log(url("http://example.com"));

console.log(url("example.com"));
console.log(url("hello"));
console.log(url("htp://wrong.com"));
console.log(url(""));
console.log(url(null));
