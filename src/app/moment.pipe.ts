import { Pipe, PipeTransform } from '@angular/core';

import moment from "moment";

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return moment(value).fromNow();
  }

}
