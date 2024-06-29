import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../common-ui/header/header.component";
import {PizzaCardComponent} from "../../common-ui/pizza-card/pizza-card.component";
import {ProductService} from "../../services/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../data/intefaces/product.interface";

@Component({
  selector: 'app-pizza',
  standalone: true,
    imports: [
        HeaderComponent,
        PizzaCardComponent
    ],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css'
})
export class PizzaComponent implements OnInit{

    productService: ProductService = inject(ProductService)
    public products: Product[] = [];

    ngOnInit(): void {
        this.getAllProducts()
    }

    public getAllProducts(): void{
        this.productService.getAllProducts().subscribe(
            (response: Product[])=>{
                this.products=response
                console.log(this.products)
            },
            (error: HttpErrorResponse)=>{
                alert(`Проблема с сервером\n ${error.message}`)
            }
        )
    }



}
