import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private afa: AngularFireAuth,
    private afs: AngularFirestore,) { }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password);
  }
  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password); 

  }

  logout(){}

  getAuth(){
    return this.afa;
  }
}
