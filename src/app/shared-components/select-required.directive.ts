import { Directive } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl, Validator } from '@angular/forms';


/**
* Code example:

           <mat-form-field>
                    <mat-select [(ngModel)]="contract.company"
                                panelClass="example-panel-dark-blue"
                                tmkSelectRequired
                                name="company"
                                [compareWith]="helper.compareById">

                      <mat-option *ngFor="let cust of customers"
                                  [value]="cust"> {{cust.title}}
                      </mat-option>
                    </mat-select>
            </mat-form-field>`
 */
@Directive({
  selector: '[tmkSelectRequired]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SelectRequiredDirective, multi: true }]
})
export class SelectRequiredDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any; } {
    return selectRequiredValidator()(c);
  }

}

export function selectRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isOk = control.value.id > 0;
    return isOk ? null : { selectValueIdRequired: { value: control.value } };
  };
}