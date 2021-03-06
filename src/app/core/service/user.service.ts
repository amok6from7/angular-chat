import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'src/app/class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
    ) { }

  create(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      this.db.object(`/users/${user.uid}`).set(new User(user));
      this.router.navigate(['/users/new']);
    })
    .catch(error => console.error(error));
  }

  update(values: any): void {
    this.afAuth.auth.currentUser.updateProfile(values)
    .then(() => {
      this.db.object(`/users/${this.afAuth.auth.currentUser.uid}`).update(values);
      this.router.navigate(['/']);
    })
    .catch(error => console.error(error));
  }
}
