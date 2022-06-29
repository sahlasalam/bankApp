import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno= "";
  psw= "";
  amount="";

  acno1= "";
  psw1= "";
  amount1="";

  depositForm=this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['',[Validators.required,Validators.pattern('[0-9 ]*')]]
  });

  withdrawForm=this.fb.group({
    acno1: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    psw1: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['',[Validators.required,Validators.pattern('[0-9 ]*')]]
  });

  user:any;
  lDate:any;
  accno="";

  constructor(private ds:DataService, private fb:FormBuilder, private move:Router) { 
    this.user=this.ds.currentUser;
    this.lDate= new Date()
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("Please login");
      this.move.navigateByUrl("");
    }
  }
  deposit(){
    var acno= this.depositForm.value.acno;
    var psw= this.depositForm.value.psw;
    var amount=this.depositForm.value.amount;

    if(this.depositForm.valid){
      const result= this.ds.deposit(acno, psw, amount);

      if(result){
        alert(amount+ "deposited successfully and new balance is" +result)
      }
    }
    else{
      alert("Invalid");
    }
    
  }
  withdraw(){
    var acno1= this.withdrawForm.value.acno1;
    var psw1= this.withdrawForm.value.psw1;
    var amount1=this.withdrawForm.value.amount1;

    if(this.withdrawForm.valid){
      const result= this.ds.withdraw(acno1, psw1, amount1);

      if(result){
        alert(amount1+ "debited successfully and new balance is" +result);
      }
    }
    else{
      alert("Invalid");
    }
  }
  logOut(){
    localStorage.removeItem("currentAcno");
    localStorage.removeItem("currentUser");
    this.move.navigateByUrl("");
  }
  deleteAccount(){
    this.accno=JSON.parse(localStorage.getItem("currentAcno")|| '');
  }
  cancel(){
    this.accno="";
  }

}
