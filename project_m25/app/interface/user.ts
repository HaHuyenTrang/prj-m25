export interface User{
    id:number,
    email: string, 
    name:string,
    password: string,
    confirmPassword: string,
    cart:[],
    status:number,
   
}
export interface Account{
    email: string,
    password: string,
}