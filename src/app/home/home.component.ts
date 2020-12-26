import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';

import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string= "" ;
  response: any;

  constructor(public github: GithubService, public http: HttpClient) { 

    localStorage.setItem("nome" , "tomas")
    localStorage.setItem("cognome" , "mali")

    sessionStorage.setItem("Nome", "Tomas")
    sessionStorage.setItem("Cognome","Mali")
    

  }


  ngOnInit() {
  }

  public getMyReopos(){
    this.http
    .get('https://api.github.com/users/TomasMali/').subscribe((response)=> {
      console.log(response)
    })
  }

  public search(){
      this.http
      .get('https://api.github.com/users/' + this.userName).subscribe((response)=> {
        this.response = response;
  })
  }

  public getUsers(){
    this.http
    .get('https://resttomas.herokuapp.com/users').subscribe((response)=> {
      console.log(response)
      this.response = response;
})
  }

}
