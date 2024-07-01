import {User} from "./user.interface";
import {OrderItem} from "./orderItem.interface";
import {OrderStatus} from "./orderStatus.enum";

export interface Order{
    id: number
    user: User
    orderStatus: OrderStatus
    orderItems: OrderItem[]

}