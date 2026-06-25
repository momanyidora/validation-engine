import type {ValidatorResult} from "./validators"

export function url(value: any): ValidatorResult{
if(typeof value !== "string"){
    return{
        valid: false,
        error:{
            rule: "isURL",
            message: "Value must be a valid URL",
            code: "INVALID_URL",
        }
    }
}
try{
    const parseUrl = new URL(value);
    if(
        parseUrl.protocol !== "http:" &&,
        parseUrl.protocol !== "https:"
    )
}