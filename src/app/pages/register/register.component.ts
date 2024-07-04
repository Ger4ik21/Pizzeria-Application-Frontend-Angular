import {Component, inject, OnInit} from '@angular/core';
import {User} from "../../data/intefaces/user.interface";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  registerService: RegisterService = inject(RegisterService)

  user!: User;

  showPass!: boolean

  registerForm = new FormGroup({
    firstname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(50)]),
    gender: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    this.register()
  }

  register() {
    if (this.registerForm.valid) {
      //@ts-ignore
      this.user = this.registerForm.value;
      console.log('Регистрация пользователя:', this.user);

      this.registerService.register(this.user).subscribe(
          response => {
            console.log('Регистрация успешна!', response);
            alert('Регистрация успешна!');
            this.registerForm.reset();
          },
          error => {
            console.error('Ошибка при регистрации. Попробуйте снова.', error);
            alert('Ошибка при регистрации. Попробуйте снова.');
          }
      );
    } else {
      alert('Форма регистрации заполнена некорректно');
      console.log(this.registerForm.value);
    }
  }
}


