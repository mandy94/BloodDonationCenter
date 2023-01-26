import { Appointment } from "./appointment"

export interface Center{
    id:number,
    name: string,
    city: string,
    address: string,
    rating: number,
    img: string,
    appointments :any
}