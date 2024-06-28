import {Role} from "./role.interface";

export interface User{
    id: number
    firstName: string
    lastName: string
    password: string
    email: string
    gender: string
    birthDate: Date
    role: Role
}