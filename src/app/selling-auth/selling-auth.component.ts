
import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
import { SellerService } from '../services/seller.service';


@Component({
  selector: 'app-selling-auth',
  templateUrl: './selling-auth.component.html',
  styleUrl: './selling-auth.component.css'
})
export class SellingAuthComponent implements OnInit {
  constructor(private seller:SellerService){}
showLogin=false;
authError:String='';
ngOnInit(): void{
  this.seller.reloadSeller()
} 

signUp(data:signUp):void{
 
  this.seller.userSignUp(data)
  
}
login(data:signUp):void{
  this.authError="";
 console.warn(data);
 this.seller.userLogin(data)
 this.seller.isLoginError.subscribe((isError)=>{
  if(isError){
    this.authError="Email or password is not correct";
  }
  
})
 
  
}
openLogin(){
this.showLogin=true
}
openSignUp(){
  this.showLogin=false
  }
}  
  


