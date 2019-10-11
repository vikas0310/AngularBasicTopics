import { AbstractControl, ValidatorFn } from '@angular/forms';

export function alphaNumericValidator(allowSlash?: boolean): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let alphaRe: RegExp;
    if (!allowSlash) {
      alphaRe = new RegExp(`^[a-zA-Z0-9]*$`, 'g');
    } else {
      alphaRe = new RegExp(`^[a-zA-Z0-9]*$`, 'g');
    }

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
