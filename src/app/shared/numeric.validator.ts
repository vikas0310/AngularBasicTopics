import { AbstractControl, ValidatorFn } from '@angular/forms';

export function allowNumericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let alphaRe: RegExp;
    alphaRe = new RegExp(`^[0-9]*$`, 'g');

    let valid: boolean;
    if (
      (control.value === '' || control.value === null) &&
      !control.hasError('required')
    ) {
      valid = true;
    } else {
      valid = alphaRe.test(control.value);
    }
    return valid ? null : { alpha: { value: control.value } };
  };
}
