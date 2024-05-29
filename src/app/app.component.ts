import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-app';

  constructor(private router: Router) {}

  isNavigationVisible(): boolean {
    const currentRoute = this.router.url;
    return currentRoute !== '/login';
  }
}
