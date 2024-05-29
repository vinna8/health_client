declare var google: any;
import { Component, OnInit } from '@angular/core';

import { GOOGLE_CLIENT_ID } from '../../constants/constants';
import { AuthService } from '../../services/auth.service';
import { GoogleAuth } from '../../types/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent /*implements OnInit*/ {
  constructor(public authService: AuthService) {}

  /*ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (res: GoogleAuth) => {
        console.log(res);
        //this.authService.login(res.credential);
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("google-btn"), 
      {
        theme: 'filled_white',
        size: 'large',
        shape: 'rectangle',
        width: 350
      }
    );
  }*/

  login(): void {
    this.authService.login().subscribe({
      next: (data) => {
        console.log(data);
        window.location.href = data.authUrl;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
