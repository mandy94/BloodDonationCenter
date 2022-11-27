export interface DonationCenter{
    id:number,
    name: string,
    city: string,
    street : string,
    rating: number,
    img: string
}
export interface Props{
    array : DonationCenter[]
}