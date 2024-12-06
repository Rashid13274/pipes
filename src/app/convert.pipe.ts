import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true // Mark the pipe as standalone
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits:string): any {
    // return null;
    if(!value){
      return '';
    }

    switch(targetUnits){
      case 'km':
        return value *  1.609344;
      case 'm': 
        return value *  1.609344 * 100;
      case 'cm': 
        return value *  1.609344 * 100* 1000;
        default :
        throw new Error('Target unit not supported');
    }
    
  }

}
