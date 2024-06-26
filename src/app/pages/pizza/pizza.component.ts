import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";
import {PizzaCardComponent} from "../../common-ui/pizza-card/pizza-card.component";

@Component({
  selector: 'app-pizza',
  standalone: true,
    imports: [
        HeaderComponent,
        PizzaCardComponent
    ],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent {

}
