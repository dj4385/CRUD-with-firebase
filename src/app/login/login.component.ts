import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app' 
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail = {
    email: '',
    password: ''
  }
  user_ 

  userDetail : any = []

  constructor(
    private afAuth : AngularFireAuth,
    private route: Router,
  ) { }

  ngOnInit() {
  }

  loginUser(){
    this.afAuth.authState.subscribe(
      user => {
        if(user){
          this.user_ = user
          
          console.log(this.user_.uid)
          if(this.user_.uid != ""){
            localStorage.setItem('user', JSON.stringify(this.user_))
            this.route.navigate(['dashboard'])  
          } else {
            alert('Invalid Login ID and Password')
          }
        } else {
          alert('User Does not exist')
        }
      }
    ) 
  }

  
  gmailSignIn(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  fbLogin(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }
}
