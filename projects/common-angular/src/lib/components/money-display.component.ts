import { Component, input } from '@angular/core';
import { MoneyPipe } from '../pipes/money.pipe';

@Component({
  selector: 'lib-money-display',
  imports: [MoneyPipe],
  template: `<span>{{ amount() | money: symbol() }}</span>`,
})
export class MoneyDisplayComponent {
  amount = input.required<number>();
  symbol = input<string>('$');
}
