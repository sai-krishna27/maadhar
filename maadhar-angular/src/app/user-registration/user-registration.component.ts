import { Citizen } from './../../../admin';
import { AadharService } from './../aadhar.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'admin';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  email:string
  password:string
  adminLogin:boolean
  adminRegistration:boolean
  loginMessage=""
  registrationMessage=""
  adminref:User=new User
  loginStatus:boolean
  regStatus:boolean
  citizenEnable=false
  

  registerEnable(){
    this.loginMessage=""
    this.adminRegistration=true
    this.adminLogin=false
  }
  loginEnable(){
    this.registrationMessage=""
    this.adminRegistration=false
    this.adminLogin=true
  }
  checkLogin(){
    this.registrationMessage=""
    let response=this.aadharService.hasUser(this.email,this.password)
      response.subscribe((data:boolean)=>{
    if(data){
      this.adminRegistration=false
      this.adminLogin=false
      this.loginMessage="login successful"
      this.citizenEnable=true
    }
    else{
      this.loginMessage="Invalid credentials"
    }
  })

  }
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  errorEmail=""
  errorPassword=""
  passwordRegex: RegExp = /^\d+$/

  register(){
    this.loginMessage=""
    if(this.adminref.email==null || this.adminref.password==null || this.adminref.name==null){
      this.registrationMessage="all fields need to be filled"
      return
    }
    
    if(this.passwordRegex.test(this.adminref.password) && this.adminref.password.length>=6){
      this.errorPassword=""
    }
    else{
      this.errorPassword="The password should contain min 6 characters of only digits"
    }
    if(this.emailRegex.test(this.adminref.email)){
      this.errorEmail=""
    }
    else{
      this.errorEmail="invalid email"
    }
    if(this.errorEmail=="" && this.errorPassword==""){
      let response=this.aadharService.addUser(this.adminref)
      response.subscribe((data:boolean)=>{
      if(data){
        this.registrationMessage=""
        this.adminLogin=true
        this.adminRegistration=false
      }
      else{
        this.registrationMessage="Admin already exists"
      }
    })
  }

  }

  citizenref:Citizen=new Citizen
  hasCitizen:string=""
  citizenId=""
  phone:number
  checkAadhar(){
    this.citizenId=""
    if(this.phone/100000000>10 && this.phone/1000000000<10){
      let response=this.aadharService.getCitizenByPhone(this.phone)
      response.subscribe((data:any)=>{
        if(data!=null){
          this.citizenref=data[0]
          this.citizenId=data.id+" is your aadhar number"
          this.hasCitizen=""
        }
        else{
          this.hasCitizen="citizen not found"
        }
      })
    }
    else{
      this.hasCitizen="invalid phone number"
    }
  }
  errorPhone=""
  createCitizenEnable=false
  createAadhar(){
    this.createCitizenEnable=true
    this.citizenId=""
  }

 
  errorCitizen=""
  errorCitizenEmail=""
  addCitizen(){
    if(this.citizenref.name==null || this.citizenref.address==null || this.citizenref.email==null ||
      this.citizenref.gender==null || this.citizenref.phno==null){

        this.errorCitizen="all fields need to be filled"
        return
      }

    
    this.citizenref.status="pending approval"
    this.citizenref.id=this.generateRandom12DigitNumber()
    let response=this.aadharService.addCitizen(this.citizenref)
    response.subscribe()
    this.errorCitizen=""
    this.createCitizenEnable=false

    


  }
  generateRandom12DigitNumber(): number {
    const min = 100000000000;
    const max = 999999999999; 
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  constructor(private aadharService:AadharService){

  }

  ngOnInit():void{

    this.citizenId=null
    
  this.adminLogin=true
  this.adminRegistration=false
  }

 

}

