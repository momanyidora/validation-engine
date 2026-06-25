import { uuid } from "../src/validators/uuid";

console.log(uuid("550e8400-e29b-41d4-a716-446655440000"));
console.log(uuid("123e4567-e89b-12d3-a456-426614174000"));

console.log(uuid("550e8400-e29b"));
console.log(uuid("550e8400e29b41d4a716446655440000"));
console.log(uuid("not-a-uuid"));
console.log(uuid(""));
console.log(uuid(null));
