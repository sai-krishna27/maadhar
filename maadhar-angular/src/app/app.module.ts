import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AadharService } from './aadhar.service';

const route:Routes=[
  {path:"admin",component:AdminRegistrationComponent},
  {path:"user",component:UserRegistrationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AdminRegistrationComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpClientModule
  ],
  providers: [AadharService],
  bootstrap: [AppComponent]
})
export class AppModule { }
