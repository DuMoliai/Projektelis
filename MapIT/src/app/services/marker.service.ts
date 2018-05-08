import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Marker } from '../Models/marker';
@Injectable()
export class MarkerService {
  itemsCollecion: AngularFirestoreCollection<Marker>;

  constructor(public afs : AngularFirestore) { }

}
interface marker {
  name?: string;
  lat: number;
  lng: number;
  draggable: boolean;
}
