import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(value: number) {
    const str = value.toString();
    let result = '';

    for (let i = 0; i < str.length; i++) {
      result += str[i];

      if ((i + 1) % 4 === 0 && i !== str.length - 1) {
        result += '-';
      }
    }

    return result;
  }
}
