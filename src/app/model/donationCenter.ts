import { Appointment } from "./appointment"

export interface DonationCenter{
    id:number,
    name: string,
    city: string,
    street : string,
    rating: number,
    img: string,
    predefiendAvailableAppointments : Array<Appointment>|[]
}
export interface Props{
    array : DonationCenter[]
}