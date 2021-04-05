import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyAdat } from './adat.model';

@Injectable({
  providedIn: 'root'
})
export class BeadservService {
  public adatok: MyAdat[] = []; // a lekért adatok tipusát tartalmazó model
  public editindex = -1; // ezzel nézzük, hogy melyiket akarjuk szerkeszteni ha akarjuk
  public isLogged = false; // ez figyeli, hogy a felhasználó be van-e lépve

  constructor(
    private http: HttpClient
  ) {
  }

  public fetch(): Observable<any>{
    return this.http.get('https://rickandmortyapi.com/api/character'); // visszaadjuk az url-t ha meghívják ezt a függvényt
  }
}
