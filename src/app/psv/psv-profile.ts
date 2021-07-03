export interface PsvProfile {
    userId: string;
    name: string;
    email: string
    mobile: number;
    vehicle:{
        registration: string;
        type: string;
        mpesa_code:string;
    }
    
}