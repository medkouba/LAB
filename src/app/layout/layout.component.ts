import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
    user: any;
    constructor(private Authserv: AuthService, private router: Router, private ngZone: NgZone) { 
      this.Authserv.getUserClaims().then((u)=>{
      this.user=u ?? null
    
    console.log(this.user.displayName);
    console.log(this.user.photoURL);
    })}

    
    LOGOUT(): void {
        this.Authserv.doLogout().then(() => {
            // rend le remote chez  l'application front après avoir exécuté le code chez cloud
            this.router.navigate(['/login']);
        });
    }

  
}