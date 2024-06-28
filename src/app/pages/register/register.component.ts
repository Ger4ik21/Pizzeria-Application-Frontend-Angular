import { Component } from '@angular/core';
import {User} from "../../data/intefaces/user.interface";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
      CommonModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user!: User;

  registerForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
  })

  register() {
    if(this.registerForm.valid) {
      //@ts-ignore
      this.user = this.registerForm.value
      console.log(this.user)
      alert("Форма успешно заполнена :D");
    }else{
      alert("Форма регистрации заполнена некорректно(");
      console.log(this.registerForm.value);
    }
  }
}

