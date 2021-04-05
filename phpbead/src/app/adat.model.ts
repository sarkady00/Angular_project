export class MyAdat { // létrehozzuk a szükséges adat tipusokat az api fogadásához
  name: string | undefined;
  status: number | undefined;
  species: number | undefined;
  gender: string | undefined;
}

export class Logindata{ // bejelentkezéshez szükséges tárolók
  username: string | undefined;
  password: string | undefined;
}
