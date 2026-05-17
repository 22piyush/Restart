import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure:false
})
export class RemainingPipe implements PipeTransform {
  transform(message:string, max_length: number = 100) {
    return max_length - message.length;
  }
}
