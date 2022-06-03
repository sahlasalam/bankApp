import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  db : any={
    1000:{"acno":1000, "username":"Array", "password":1000, "balance":5000},
    1001:{"acno":1001, "username":"Anagha", "password":1001, "balance":3000},
    1002:{"acno":1002, "username":"Ammu", "password":1002, "balance":5000},

  }


  constructor() { }

  //login
  login(acno:any, psw:any){
    var db=this.db;
    if(acno in db){
      if(psw==db[acno]["password"]){
       return true;
      }
      else{
        alert("Incorrect password");
        return false;
      }
    }
    else{
      alert("user does not exist");
      return false;
    }
    
  }
  //register
  register(username:any, acno:any, password:any){
    let db=this.db;
    if(acno in db){
      return false;
    }
    else{
      db[acno]={acno ,
           username, 
           password, 
           "balance":0
          }
        console.log(db);
        
        return true;
    }
    }

  //deposit
  deposit(acno:any, password: any, amnt:any){
    var amount=parseInt(amnt);
    let db=this.db;
    if(acno in db){
      if(password==db[acno]["password"]){
        db[acno]["balance"]+=amount;
        return db[acno]["balance"];
      }
      else{
        alert("Incorrect password");
        return false;
      }
    }else{
      alert("User does not exist");
      return false;
    }
  }
  
  //withdraw
  withdraw(acno:any, password:any, amnt:any){
    var amount= parseInt(amnt);
    let db= this.db;
    if(acno in db){
      if(password==db[acno]["password"]){
          if(db[acno]["balance"]>=amount){
              db[acno]["balance"]-=amount;
              return db[acno]["balance"];
          }
          else{
            alert("insufficient balance")
            return false;
          }
      }
      else{
        alert("Incorrect password");
        return false;
      }
    }else{
      alert("User does not exist");
      return false;
    }
  }
}
