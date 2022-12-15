import { NgbPaginationNumber } from "@ng-bootstrap/ng-bootstrap";
import { DonationCenter } from "./donationCenter";

export interface Appointment{
    id:number,
    start:string,
    end:string,
    type:string,
    date:Date
    // donactionCenter: DonationCenter
}