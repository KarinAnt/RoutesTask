import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    users:{id:number; name:string; surname:string; city:string; img:string}[] = [
    {id:1, name:"Anna", surname:'Grigoryan', city:'Yerevan', img:'user1'},
    {id:2, name:"Armen", surname:'Stepanyan', city:'Gyumri', img:'user2'},
    {id:3, name:"Areg", surname:'Tumanyan', city:'Hrazdan', img:'user3'},
    {id:4, name:"Anush", surname:'Simnyan', city:'Ararat', img:'user4'},
    {id:5, name:"Arpi", surname:'Gasparyan', city:'Abovyan', img:'user5'}
  ]
  constructor() { }

  ngOnInit() {
  }
  LogOut(){
    localStorage.setItem('emptyloginorpass', "true");
  }
}
