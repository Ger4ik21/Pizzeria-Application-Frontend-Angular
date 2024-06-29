import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";
import {User} from "../../data/intefaces/user.interface";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    HeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user!: User

  showPass!: boolean

  profileForm = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
  })

  updateUser(){
    if (this.profileForm.valid) {
      //@ts-ignore
      this.user = this.profileForm.value
      console.log(this.user)
      alert("Форма успешно заполнена :D");
    } else {
      alert("Форма регистрации заполнена некорректно(");
      console.log(this.profileForm.value);
    }
  }
  logOut(){}
}
