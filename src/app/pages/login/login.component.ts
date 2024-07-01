import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Authentication} from "../../data/intefaces/authentication.interface";
import {User} from "../../data/intefaces/user.interface";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authentication!: Authentication;
  showPass!: boolean

  form = new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email,Validators.maxLength(50)]),
    password: new FormControl(null,[Validators.required, Validators.minLength(6)]),
  })

  onSubmit(){
    if(this.form.valid) {
      //@ts-ignore
      this.authentication=this.form.value
      console.log(this.authentication);
      alert("Всё корректно!");
    }else {
      alert("Username or password is not valid");
    }
  }

}
