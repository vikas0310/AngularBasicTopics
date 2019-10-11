import { AbstractControl, ValidatorFn } from '@angular/forms';

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    // const telRe: RegExp = new RegExp(/^(0?[1-9]|1[0-2])\/(2[0-9]{3})$/g);
    // const telRe: RegExp = new RegExp(/^((19[0-9]{2}|2[0-9]{3})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))$/g);

    // tslint:disable-next-line: max-line-length
    // const telRe: RegExp = new RegExp(/^((19)[0-9]{2}|(2)[0-9]{3}(0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|(19)[0-9]{2}|(2)[0-9]{3}(0[469]|11)(0[1-9]|[12][0-9]|30)|(19)[0-9]{2}|(2)[0-9]{3}(02)(0[1-9]|1[0-9]|2[0-8])|(((19|20)(04|08|400|[2468][048]|[13579][26]))|2000)(02)29$/g);

    // tslint:disable-next-line: max-line-length
    // year calculation from 1999 to 2999 including leap years
    const telRe: RegExp = new RegExp(/^((19[0-9]{2}|2[0-9]{3})[]?((0[13-9]|1[012])[]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[]?31|02[]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048])00)[]?02[]?29)$/g);

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
