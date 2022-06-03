import { Component, OnInit } from '@angular/core';
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

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
    var acno= this.acno;
    var psw= this.psw;
    var amount=this.amount;
    const result= this.ds.deposit(acno, psw, amount);

    if(result){
      alert(amount+ "deposited successfully and new balance is" +result)
    }
  }
  withdraw(){
    var acno1= this.acno1;
    var psw1= this.psw1;
    var amount1=this.amount1;
    const result= this.ds.withdraw(acno1, psw1, amount1);

    if(result){
      alert(amount1+ "debited successfully and new balance is" +result);
    }
  }

}
