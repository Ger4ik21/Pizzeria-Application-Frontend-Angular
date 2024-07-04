import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {enviroment} from "../enviroment/enviroment";
import {Product} from "../data/intefaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = enviroment.apiBaseUrl;

  http : HttpClient = inject(HttpClient)

  // constructor(private http: HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServerUrl}/api/v1/product`)
  }

  public addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/api/v1/product`, product);
  }

  // public updateEmployee(employee: Employee): Observable<Employee>{
  //   return this.http.put<Employee>(`${this.aprServerUrl}/employee/update`,employee)
  // }
  //
  // public deleteEmployee(employeeId: number): Observable<void>{
  //   return this.http.delete<void>(`${this.aprServerUrl}/employee/delete/${employeeId}`)
  // }
}
