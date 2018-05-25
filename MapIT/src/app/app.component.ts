import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/observable';
import { Marker } from '@agm/core/services/google-maps-types';
import { AuthService } from './shared/auth.service';
import * as firebase from 'firebase/app';



@Component({
  selector: 'lsl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // Zoom level
    zoom = 10;

    user = null;

    PagesMarker: Observable<any[]>;


    markerName: string;
    expDate: Date;
    description: string;
    // Map Position
    title = 'My map';
    lat = 54.8985207;
    lng = 23.90359650000005;

    // Marker
    markers: marker[];
    itemsRef: AngularFireList<marker>;
    items: Observable<marker[]>;

    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.itemsRef = db.list('Markers');
        this.items = this.itemsRef.valueChanges();
        this.getItems().subscribe(items => {
           // console.log(items);
           this.markers = items;
        });
    }
    login()
    {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
    }
    logout(){
        this.afAuth.auth.signOut();
    }
    getItems() {
        return this.items;
    }

    ngOnInit() {

    }


    mapClicked($event: any) {
        const newMarker = {
            name: this.markerName,
            description: this.description,
            expDate: this.expDate,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        if (newMarker.name != null) {
            this.markers.push(newMarker);
            this.itemsRef.push(newMarker);
        } else {
            console.log('error');
        }
    }



    clickedMarker(marker: marker, index: number) {
        console.log('Clicked Marker:' + marker.name + 'at index' + index);

    }
    addMarker($event: any) {

        const newMarker = {
            name: this.markerName,
            description: this.description,
            expDate: this.expDate,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);

    }
    removeMarker(marker){
        console.log('Removing marker');
        console.log('markeris');
        console.log(marker);
        //var markr = JSON.parse(JSON.stringify(marker));
        for(var i =0;i<this.markers.length;i++){
          if(marker.lat == this.markers[i].lat && marker.lng == this.markers[i].lng){
            this.markers.splice(i,1);
          }
       }
      this.itemsRef.remove(JSON.stringify(marker));
      }

}
interface marker {
    name?: string;
    description: string;
    expDate?: Date;
    lat: number;
    lng: number;
    draggable: boolean;
}
