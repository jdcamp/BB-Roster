import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'position'
})
export class PositionPipe implements PipeTransform {

  transform(value: any, pos: string) {
    //   let output: any = [];
    // if (value === null) {
    //   return;
    // } else {
    //   for (let i = 0; 0 < value.length; i++) {
    //     if (value[i].position === pos) {
    //       output.push(value[i]);
    //       console.log(output);
    //     }
    //   }
    // }
    // return output;
    let output = null;
    if ( value.position === pos) {
        output = value;
    }
    return output;
  }

}
