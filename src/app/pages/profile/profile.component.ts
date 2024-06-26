import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";

@Component({
  selector: 'app-profile',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
