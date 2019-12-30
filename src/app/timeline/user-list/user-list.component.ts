import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userRef: AngularFireList<any>;
  users: User[];

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.list('/users');
  }

  ngOnInit() {
    this.userRef.snapshotChanges().subscribe(snapshots => {
      this.users = snapshots.map(snapshot => {
        const values = snapshot.payload.val();
        return new User(values);
      });
    });
  }

}
