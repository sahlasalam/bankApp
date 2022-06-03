import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usname="";
  acno="";
  psw="";

  //form group
  registerForm= this.fb.group({
    usname:'',
    acno:'',
    psw:''
  });

  constructor(private ds:DataService, private move:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var usname= this.usname;
    var acno=this.acno;
    var psw=this.psw;
     
    const result= this.ds.register(usname, acno, psw)

    if(result){
      alert("successfully Registered");
      this.move.navigateByUrl("")
    }
    else{
      alert("Already existing user. please login");
    }
  }

}
