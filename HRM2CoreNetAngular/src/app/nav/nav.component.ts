import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
/** nav component*/
export class NavComponent {
  // to store username & password
    model: any = {};

    /** nav ctor */
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router ) {

  }
  ngOnInit() { }

  login() {
    this.authService.login(this.model).subscribe(
        next => {
          this.alertify.success('Logged in successfully');

        }, error => {
          this.alertify.error(error);
        }, ()=> {
          this.router.navigate(["/value"]);
      });
  
  }

  loggedIn() {
    return this.authService.loggedIn();
  
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(["/home"]);
  }
}
