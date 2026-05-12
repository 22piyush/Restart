import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(creditCard: string) {
    if (!creditCard) {
      return '';
    }

    return creditCard.match(/.{1,4}/g)?.join('-');
  }
}
