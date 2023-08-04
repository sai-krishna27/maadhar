import { Component, OnInit } from '@angular/core';
import { AadharService } from '../aadhar.service';
import { Admin, Citizen } from 'admin';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit{
  email:string
  password:string
  adminLogin:boolean
  adminRegistration:boolean
  loginMessage=""
  registrationMessage=""
  adminref:Admin=new Admin
  loginStatus:boolean
  regStatus:boolean

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
    let response=this.aadharService.hasAdmin(this.email,this.password)
    response.subscribe((data:boolean)=>{
    if(data){
      this.adminRegistration=false
      this.adminLogin=false
      this.loginMessage="login successful"
      this.menuEnable=true
    }
    else{
      this.loginMessage="Invalid credentials"
    }
  })

  }
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#&])[A-Za-z\d@#&]+$/
  errorEmail=""
  errorPassword=""

  register(){
    this.loginMessage=""
    if(this.adminref.email==null || this.adminref.password==null || this.adminref.name==null){
      this.registrationMessage="all fields need to be filled"
      return
    }
    
    if(this.passwordRegex.test(this.adminref.password)){
      this.errorPassword=""
    }
    else{
      this.errorPassword="The password should have at least: One Uppercase, one lowercase, one special character (@,#,&….), and one number."
    }
    if(this.emailRegex.test(this.adminref.email)){
      this.errorEmail=""
    }
    else{
      this.errorEmail="invalid email"
    }
    if(this.errorEmail=="" && this.errorPassword==""){
      let response=this.aadharService.addAdmin(this.adminref)
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

  citizenref:any
  approvalCitizensList:any
  menuEnable=false
  citizensListEnable=false
  citizensApprovalEnable=false

  approve(citizen:Citizen){
    citizen.status="approved"
    let response=this.aadharService.updateCitizen(citizen)
    response.subscribe()
    this.ngOnInit()
  }

  citizensList(){
    this.citizensApprovalEnable=false
    this.citizensListEnable=true

  }

  approvalList(){
    this.citizensListEnable=false
    this.citizensApprovalEnable=true
  }

  constructor(private aadharService:AadharService){

  }

  ngOnInit():void{
    this.adminLogin=true
    this.adminRegistration=false
    let response=this.aadharService.getCitizensList()
    response.subscribe((data:any)=>this.citizenref=data)
    let response1=this.aadharService.getCitizensList()
    response1.subscribe((data1:any)=>this.approvalCitizensList=data1)
  }

 

}



