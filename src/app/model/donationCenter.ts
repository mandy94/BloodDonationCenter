import { Appointment } from "./appointment"

export interface DonationCenter{
    id:number,
    name: string,
    city: string,
    street : string,
    rating: number,
    img: string,
    predefiendAvailableAppointments :any
}
export interface Props{
    array : DonationCenter[]
}