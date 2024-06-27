import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Authentication} from "../../data/intefaces/authentication.interface";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email,Validators.maxLength(30)]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
  })

  @Input() authentication!: Authentication;

  onSubmit(){
    if(this.form.valid) {
      console.log(this.form.value);
    }else {
      alert("Username and password is not valid");
    }
  }

}
