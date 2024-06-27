import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PizzaComponent} from "./pages/pizza/pizza.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, PizzaComponent, ProfileComponent, LoginComponent, RegisterComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzeria';
}
