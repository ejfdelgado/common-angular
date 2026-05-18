import { Pipe, PipeTransform } from '@angular/core';
import { numberToMoney } from '../common/money';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  transform(value: number, symbol: string = '$'): string {
    return numberToMoney(value, symbol);
  }
}
