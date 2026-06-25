export interface ValidationError{
    rule: string;
    message: string;
    code: string;
}
export interface ValidatorResult{
valid: boolean;
error: ValidationError | null;
}
export type validator = (value: any) => ValidatorResult;