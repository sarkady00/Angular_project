import { Component } from '@angular/core';
import { BeadservService } from './beadserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phpbead';

  constructor(public service: BeadservService) {
  }

  logout(): void{ // kijelentkezteti a felhasználót
    this.service.isLogged = false;
  }
}
