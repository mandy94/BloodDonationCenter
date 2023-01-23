import { Appointment } from "./appointment"

export interface DonationCenter{
    id:number,
    name: string,
    city: string,
    address : string,
    rating: number,
    img: string,
    predefiendAvailableAppointments :any
}
export interface Props{
    array : DonationCenter[]
}