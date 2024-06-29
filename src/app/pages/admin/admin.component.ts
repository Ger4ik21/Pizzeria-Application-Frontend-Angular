import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";

@Component({
  selector: 'app-admin',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
