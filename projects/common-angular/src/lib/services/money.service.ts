import { Injectable } from '@angular/core';
import { numberToMoney } from '../common/money';

@Injectable({
  providedIn: 'root',
})
export class MoneyService {
  format(amount: number, symbol: string = '$'): string {
    return numberToMoney(amount, symbol);
  }
}
