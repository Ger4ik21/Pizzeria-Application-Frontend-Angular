import { Component } from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Category} from "../../data/intefaces/category.interface";

@Component({
  selector: 'app-admin',
  standalone: true,
    imports: [
        HeaderComponent,
        FormsModule,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

    category!: Category
    categoryForm= new FormGroup({
        category: new FormControl(null,[Validators.required,Validators.minLength(3)])
    })
    addNewCategory(){
        console.log(this.categoryForm.controls['category'].value);
    }
}
