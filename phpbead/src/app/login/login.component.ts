import { Component, OnInit } from '@angular/core';
import {Logindata} from '../adat.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { BeadservService } from '../beadserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  data = new Logindata();

  constructor(
    private readonly  fb: FormBuilder,
    public service: BeadservService,
    private route: Router
  ) {
    this.form = this.fb.group({ // létrehozunk egy saját formgroupot, hogy tudjuk használni a validációkat egyszerűen
      username: ['', [Validators.required, Validators.pattern('asdasd')]],
      // csak akkor fogadja el ha az itt megadott értékeket adjuk meg neki
      password: ['', [Validators.required, Validators.pattern('1234')]]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.form.valid) // ha jól töltöttük ki a login formot akkor beléptet és átíirányít a list oldalra
    {
      this.service.isLogged = true;
      alert('Belépés sikeres');
      this.route.navigate(['list']);
    }
    else{
      alert('Hibás felhasználó név vagy jelszó'); // ha nem jól adtuk meg a jelszót vagy a felhasználó nevet nem enged be
    }

  }

}
