import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";

@Component({
  selector: 'app-cart',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

}
