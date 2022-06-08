import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Perfect banking partner"
  accno="account number"
  acno=""
  psw=""


  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9 ]*')]]
  });

  // db : any={
  //   1000:{"acno":1000, "username":"Array", "password":1000, "balance":5000},
  //   1001:{"acno":1001, "username":"Anagha", "password":1001, "balance":3000},
  //   1002:{"acno":1002, "username":"Ammu", "password":1002, "balance":5000},

  // }

  constructor(private move:Router , private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
acnochange(event:any){
  this.acno= event.target.value
  console.log(this.acno);
  
}
pswchange(event:any){
  this.psw=event.target.value
  console.log(this.psw);
  
}
login(){
  var acno= this.loginForm.value.acno;
  var psw=this.loginForm.value.psw;
  // var db=this.db;
  // if(acno in db){
  //   if(psw==db[acno]["password"]){
  //     alert("Login successful");
  //     this.move.navigateByUrl('dashboard');
  //   }
  //   else{
  //     alert("Incorrect password");
  //   }
  // }
  // else{
  //   alert("user does not exist");
  // }
  
  if(this.loginForm.valid){
    const result= this.ds.login(acno,psw);
    if(result){
            alert("Login successful");
            this.move.navigateByUrl('dashboard');
  
    }
  }
  else{
    alert("Invalid");
  }
  
}

//template referencing variable
// login(a:any,p:any){
//   console.log(a.value);
  
//   var acno= a.value;
//   var psw=p.value;
//   var db=this.db;
//   if(acno in db){
//     if(psw==db[acno]["password"]){
//       alert("Login successful");
//     }
//     else{
//       alert("Incorrect password");
//     }
//   }
//   else{
//     alert("user does not exist");
//   }
  
// }

}

