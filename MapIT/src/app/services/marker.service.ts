declare var GeoFire: any;
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class MarkerService {
  

  dbRef: any;
  geoFire: any;

  hits = new BehaviorSubject([])

  constructor(private db: AngularFireDatabase) {
    /// Reference database location for GeoFire
    this.dbRef = this.db.list('/locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);

   }

   /// Adds GeoFire data to database
   setLocation(key: string, coords: Array<number>) {
     this.geoFire.set(key, coords)
         .then(_ => console.log('location updated'))
         .catch(err => console.log(err))
   }


   /// Queries database for nearby locations
   /// Maps results to the hits BehaviorSubject
   getLocations(radius: number, coords: Array<number>) {
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      const hit = {
        location: location,
        distance: distance
      }

      const currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
   }

}
