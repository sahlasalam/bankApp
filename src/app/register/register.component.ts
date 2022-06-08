import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    usname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  });

  constructor(private ds:DataService, private move:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var usname= this.registerForm.value.usname;
    var acno=this.registerForm.value.acno;
    var psw=this.registerForm.value.psw;
     
    if(this.registerForm.valid){
      const result= this.ds.register(usname, acno, psw);

      if(result){
        alert("successfully Registered");
        this.move.navigateByUrl("")
      }
      else{
        alert("Already existing user. please login");
      }
    }
    else{
      alert("Invalid");
    }
    
  }

}
