import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PizzaComponent} from "./pages/pizza/pizza.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzaComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
