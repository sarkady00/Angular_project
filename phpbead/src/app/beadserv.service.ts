import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MyAdat} from './adat.model';

@Injectable({
  providedIn: 'root'
})
export class BeadservService {
  public adatok: MyAdat[] = [];
  public editindex = -1;
  public isLogged = false;

  constructor(
    private http: HttpClient
  ) {
  }

  public fetch(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
