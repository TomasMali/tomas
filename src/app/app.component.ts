import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { of as observableOf, Observable } from 'rxjs';
import { debug } from 'util';
import {  ElementRef,  ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  user_name: any[]
validation : boolean= false;
@ViewChild('btnClose') btnClose : ElementRef ;




  // 4.
  constructor(private router: Router,  db: AngularFireDatabase) {
    db.list('/user').valueChanges().subscribe(user => {
      this.user_name = user
      console.log("valore: " + this.user_name)
    })
  }


  isValid(username, pass){

    for(let  i = 0 ; i < this.user_name.length ; i++){
     // console.log("Username is: " + this.user_name[i].username)
     // console.log("Password is: " + this.user_name[i].password)
    }

  }



  title = 'Resume';

  onClickSubmit(data) {
    console.log(data)

    for(let  i = 0 ; i < this.user_name.length ; i++){
      if(this.user_name[i].username !== data.emailid || this.user_name[i].password !== data.psswd){
      alert('Username or Password invalid!')
      return false
      }
     
      if(this.user_name[i].username === data.emailid && this.user_name[i].password === data.psswd)
      {
        this.validation = true
        this.btnClose.nativeElement.click()
        return true
      }

    }


  }

  downloadResume() {

    window.open("../assets/CV-Europass-20180504-Mali-IT.pdf");
    return false;

  }

}
