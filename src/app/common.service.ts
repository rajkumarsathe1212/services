import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  students = [
    {no:1 , name:"Raj" , sirname : "Sathe" , age:21, education:"12th"},
    {no:2 , name:"Vivek" , sirname : "Sutar" , age:22, education:"UG"},
    {no:3 , name:"Rushi" , sirname : "Khataki" , age:23, education:"PG"},
    {no:4 , name:"Aniket" , sirname : "Kambale" , age:24, education:"Masters"},
  ]

  constructor() { }
  
}
