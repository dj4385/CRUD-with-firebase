import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../common/alert.service'
import * as firebase from 'firebase/app' 
import { AngularFireAuth } from '@angular/fire/auth';
import { FbDatabaseService } from '../common/fb-database.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectFile: File = null
  gender_ = ['Male','Female','Other']

  user = {
    fname:"",
    gender:"",
    contact:"",
    email : "",
    password : ""
  }
  constructor(
    private route: Router,
    private swalAlert : AlertService,
    private afAuth : AngularFireAuth,
    private fbService: FbDatabaseService
   ) { }

  ngOnInit() {
  }

  registerUser(){
    // const fd = new FormData
    // fd.append('image', this.selectFile, this.selectFile.name)
    this.fbService.createUser(this.user).
      subscribe(
        res => {
          alert('User Registered Successfully')
          this.route.navigate(['login'])
        }
      )
  }
  // imageUpload(event){
  //   this.selectFile = event.target.files[0];
  //   console.log(event)
  // }

}
