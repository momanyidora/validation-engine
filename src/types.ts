export interface ValidationError {
  rule: string;
  message: string;
  code: string;
}
export interface ValidationOptions {
  coerce?: boolean;
}
export interface ValidatorResult {
  valid: boolean;
  error: ValidationError | null;
}

export type Validator = (value: any) => ValidatorResult;
