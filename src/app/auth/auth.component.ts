import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


import { AuthService, AuthResponseData } from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isSignInMode: boolean = true;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isSignInMode = !this.isSignInMode;
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if(this.isSignInMode){
      authObs = this.authService.signIn(email,password);
    } else{
      authObs = this.authService.signUp(email,password);
    }

    authObs.subscribe(responseData =>{
      console.log(responseData);
    },error =>{
      console.log(error);
      this.error = error;
    });


    form.reset();
  }

}
