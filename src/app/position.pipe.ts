import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: any, pos: string) {
    let output = null;
    if (pos === 'all') {
      return value;
    }
    if (value.position === pos) {
      output = value;
    }
    return output;
  }

}
