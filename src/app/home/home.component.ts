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

}
