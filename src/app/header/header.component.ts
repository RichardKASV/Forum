import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router, NavigationEnd } from '@angular/router'; // Importujte Router a NavigationEnd

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentRoute: string;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  logout(): void {
    localStorage.removeItem("email")
    this.afAuth.signOut();
  }
}
