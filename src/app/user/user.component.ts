import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  constructor(private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.user = params );
    console.log(this.user);
   
  }

  ngOnInit() {

  }
  LogOut(){
    localStorage.setItem('emptyloginorpass', "true");
  }
}
