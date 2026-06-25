import { date } from "../src/validators/date";

console.log(date("2026-06-19"));
console.log(date("2026-06-19T10:30:00Z"));

console.log(date("19-06-2026"));
console.log(date("2026-99-99"));
console.log(date("not-a-date"));
console.log(date(""));
console.log(date(null));
