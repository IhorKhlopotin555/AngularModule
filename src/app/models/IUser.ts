import {ICompany} from "./iCompany";

export interface IUser{
  id:number;
  name:string;
  username:string;
  email:string;
  company: ICompany
}
