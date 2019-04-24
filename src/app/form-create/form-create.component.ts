import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Cultivos {
  id: string;
  name: string;
  tipo: string;
  temp_min: string;
  temp_max: string;
  hum_max: string;
  hum_min: string;
 }

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent{


  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<Cultivos>;
  items: Cultivos[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<Cultivos>('Cultivos');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.items = data.map(item => {
          const data = item.payload.doc.data() as Cultivos;
          data.id = item.payload.doc.id;
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log('yay'))

  }

  createCultivo(name2: string, tipo2: string) {
    return this.db.collection('Cultivos').add({
      name: name2,
      tipo: tipo2,
      temp_max: '100',
      temp_min: '0',
      hum_max: '50',
      hum_min: '1'
        });
  }

  deleteUser(id: string) {
    return this.db.collection('Cultivos').doc(id).delete();
  }

  updateUser(id: string) {
    this.db.collection('Cultivos').doc(id).update({
    });
  }

}
