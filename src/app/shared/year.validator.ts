import { AbstractControl, ValidatorFn } from '@angular/forms';

export function yearValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const telRe: RegExp = new RegExp(/^((19[0-9]{2}|2[0-9]{3}))$/g);
    let valid: boolean;
    if (
      (control.value === '' || control.value === null) &&
      !control.hasError('required')
    ) {
      valid = true;
    } else {
      valid = telRe.test(control.value);
    }
    return valid ? null : { tel: { value: control.value } };
  };
}
