import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginpass = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  logIn(){
    if( (this.loginpass.value.login == "admin"&& this.loginpass.value.password == "admin") ||
      (this.loginpass.value.login == "demo"&& this.loginpass.value.password == "demo")){
        localStorage.setItem('login', this.loginpass.value.login);
        localStorage.setItem('emptyloginorpass', "false");
    }else{
      localStorage.setItem('emptyloginorpass', "true");
    }
  }
}
