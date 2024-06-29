import {Component, Input} from '@angular/core';
import {Product} from "../../data/intefaces/product.interface";

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css'
})
export class PizzaCardComponent {
  @Input() product!: Product
}
