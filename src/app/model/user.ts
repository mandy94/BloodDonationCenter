import { Appointment } from "./appointment";
import { DonationCenter } from "./donationCenter";

export interface User{
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    country: string,
    phone: string,
    jmbg: number,
    gender: string,
    occupation: string,
    employment: string,
    questionnaire: string,
    // role: : string
    assigned: DonationCenter|undefined,
    appointments: Array<Appointment> | null,
    enabled: boolean,
    // authorities;

}