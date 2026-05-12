import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odinal',
})
export class OdinalPipe implements PipeTransform {
  transform(num: number) {
    let result = '';

    let rem = num % 10;
    switch (rem) {
      case 1:
        result = num + 'st';
        break;
      case 2:
        result = num + 'nd';
        break;
      case 3:
        result = num + 'rd';
        break;
      default:
        result = num + 'th';
        break;
    }

    return result;
  }
}
