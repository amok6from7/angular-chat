import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject = new Subject<any>();
  auth$ = this.authSubject.asObservable();

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      this.router.navigate(['/']);
    })
    .catch(error => console.error(error));
  }

  logout(): void {
    this.afAuth.auth.signOut()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => console.error(error));
  }
}
