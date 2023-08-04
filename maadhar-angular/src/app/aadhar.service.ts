import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin, Citizen, User } from 'admin';

@Injectable({
  providedIn: 'root'
})
export class AadharService {

  constructor(private http:HttpClient) { }
 

  /*public hasAdmin(email:string,password:string){
    return this.http.get("http://localhost:8086/validAdminLogin/"+email+"/"+password);
  }

  public addAdmin(admin:Admin){
    return this.http.post("http://localhost:8086/addAdmin",admin,{responseType:'text' as 'json'});
  }

  public hasUser(email:string,password:string){
    return this.http.get("http://localhost:8086/validUserLogin/"+email+"/"+password);
  }

  public addUser(user:User){
    return this.http.post("http://localhost:8086/addUser",user,{responseType:'text' as 'json'});
  }

  public getCitizenByPhone(phone:number){
    return this.http.get("http://localhost:8086/getAadharByPhone/"+phone);
  }

  public addCitizen(citizen:Citizen){
    return this.http.post("http://localhost:8086/addCitizen",citizen,{responseType:'text' as 'json'});
  }

  public getCitizensList(){
    return this.http.get("http://localhost:8086/getCitizens");
  }

  public getCitizensByStatus(){
    return this.http.get("http://localhost:8086/getCitizenByStatus/pending approval");
  }

  public updateCitizen(citizen:Citizen){
    return this.http.put("http://localhost:8086/updateCitizen",citizen,{responseType:'text' as 'json'});
  }*/

  public hasAdmin(email:string,password:string){
    return this.http.get("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/validAdminLogin/"+email+"/"+password);
  }

  public addAdmin(admin:Admin){
    return this.http.post("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/addAdmin",admin,{responseType:'text' as 'json'});
  }

  public hasUser(email:string,password:string){
    return this.http.get("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/validUserLogin/"+email+"/"+password);
  }

  public addUser(user:User){
    return this.http.post("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/addUser",user,{responseType:'text' as 'json'});
  }

  public getCitizenByPhone(phone:number){
    return this.http.get("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/getAadharByPhone/"+phone);
  }

  public addCitizen(citizen:Citizen){
    return this.http.post("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/addCitizen",citizen,{responseType:'text' as 'json'});
  }

  public getCitizensList(){
    return this.http.get("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/getCitizens");
  }

  public getCitizensByStatus(){
    return this.http.get("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/getCitizenByStatus/pending approval");
  }

  public updateCitizen(citizen:Citizen){
    return this.http.put("http://ec2-54-197-7-100.compute-1.amazonaws.com:8086/updateCitizen",citizen,{responseType:'text' as 'json'});
  }



}
