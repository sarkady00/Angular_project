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
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('asdasd')]],
      password: ['', [Validators.required, Validators.pattern('1234')]]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.form.valid)
    {
      this.service.isLogged = true;
      alert('Belépés sikeres');
      this.route.navigate(['list']);
    }
    else{
      alert('Hibás felhasználó név vagy jelszó');
    }

  }

}
