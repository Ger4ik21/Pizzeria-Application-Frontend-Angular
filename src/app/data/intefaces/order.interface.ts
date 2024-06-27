import {User} from "./user.interface";
import {OrderItem} from "./orderItem.interface";

export interface Order{
    id: number
    user: User
    orderStatus: string
    orderItems: OrderItem[]

}