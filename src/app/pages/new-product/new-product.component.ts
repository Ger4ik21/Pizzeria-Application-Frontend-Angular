import {Component, inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {HeaderComponent} from "../../common-ui/header/header.component";
import {Product} from "../../data/intefaces/product.interface";
import {Category} from "../../data/intefaces/category.interface";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-new-product',
  standalone: true,
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        HeaderComponent
    ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{

    productService: ProductService = inject(ProductService)

    product!: Product;

    category1: Category ={
        id:1,
        name:"Pizza"
    };
    category2: Category ={
        id:2,
        name:"Drinks"
    };
    file!: File

    newProductForm = new FormGroup({
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
        price: new FormControl(null, [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
        category: new FormControl(null, [Validators.required]),
    })

    ngOnInit(): void {
        this.addNewProduct()
    }

    addNewProduct() {
        if (this.newProductForm.valid) {
            //@ts-ignore
            this.product =  this.newProductForm.value;
            console.log(this.product);

            this.productService.addNewProduct(this.product).subscribe(
                response => {
                    console.log('Новый продукт добавлен!', response);
                    alert("Новый продукт добавлен!");
                    this.newProductForm.reset();
                },
                error => {
                    console.error('Ошибка при добавлении продукта. Попробуйте снова!', error);
                    alert("Ошибка при добавлении продукта. Попробуйте снова!");
                }
            );
        } else {
            alert("Форма заполнена некорректно!");
            console.log(this.newProductForm.value);
        }
    }

}
