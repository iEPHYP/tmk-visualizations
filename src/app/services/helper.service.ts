import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class HelperService {

  constructor() { }

  // helpers
  compareById(f1: Common.Item, f2: Common.Item): boolean {
    return f1 && f2 && f1.id === f2.id;
  }

  isNumber(value: any): boolean {
    return _.isNumber(value);
  }

}
