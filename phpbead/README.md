////////////////"PHP" beadandó Angular projekt\\\\\\\\\\\\\\\
_____________________________________________________________
||							                                           ||
------------------- Személyes információk -------------------
||							                                           ||
|| Készítette:			Sarkadi Balázs Róbert	                 ||
|| Neptunkód:			XCYSWG			                             ||
|| Szak:			PTE-TTK Fizika BSc	                         ||
||							                                           ||
-------------------- Projekt információk --------------------
||							                                           ||
|| API forrás:	https://rickandmortyapi.com/api/character  ||
|| login name: asdasd					                             ||
|| login pw: 1234					                                 ||
||							                                           ||
----------------------- Rövid leírás ------------------------

A program alaphelyzetben a login oldalra dob, a fent látható
gombok (list, form) csak a bejelentkezés után fognak működni
(Guarddal le vannak védve). A bejelentkezés csak a fent 
megadott adatokkal fog működni, mással nem (mintha csak ez
az egy regisztrált felhasználó lenne). Ha a felhasználó bele-
kattint egy mezőbe de üresen hagyja, akkor egy figyelmeztetés
fog megjelenni és addig nem lehet bejelentkezni (figyelmezet,
hogy hibás jelszó/felhasználó név). Ha jól adtuk meg az adatokat
a program átirányít minket a list page-re, ahol az apiból 
lekért adatokat kilistázza szépen. 

Itt lehetőségünk van törölni, ez esetben az adott sor adatai 
rögtön eltűnnek, illetve tudunk szerkeszteni is, amelyre 
ha rányomunk átvisz minket a form page-re az adott karakter 
adataival előre kitöltve, majd ezt követően ha rányomunk a 
submitra, frissíti is őket azonnal és visszavisz a 
list page-re minket ahol a változtatások már látszódnak is.

Ha mi magunk nyomunk rá a form gombra akkor van lehetőségünk 
új adatot hozzáadni, itt is minden mező kitöltése kötelező,
ha nem tesszük meg hibát fog dobni a rendszer. Azonban ha
kitöltöttünk mindent, a gombot megnyomva visszavisz minket 
a list page-re és a lista alján már látható is az újonnan 
bevitt adat.
