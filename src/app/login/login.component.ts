import { Component,NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';
//import { AuthService } from 'src/services/AuthService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private AuthSer:AuthService, private router: Router,
    private ngZone: NgZone) {}

 


SIGN():void
{
  this.AuthSer.doGoogleLogin().then(() =>{
    // rend le remote chez l'app front apres etre execute sur le serveur cloud 
    this.sucessRedirect() ; 
  })
}

sucessRedirect () :void 
{
  this.ngZone.run(()=> {
    this.router.navigate(['/members'])
  })
}


}


