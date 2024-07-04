import { HttpClient } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {enviroment} from "../enviroment/enviroment";
import {User} from "../data/intefaces/user.interface";

@Injectable({
    providedIn: 'root'
})

export class RegisterService {

    private apiServerUrl = enviroment.apiBaseUrl;

    http : HttpClient = inject(HttpClient)

    // constructor(private http: HttpClient) { }

    public register(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/api/v1/auth/register`, user);
    }

}