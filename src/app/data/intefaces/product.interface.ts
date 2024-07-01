import {Category} from "./category.interface";

export interface Product{
    id: number
    name: string
    price: number
    description: string
    category: Category

}