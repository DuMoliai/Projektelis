import { Component } from '@angular/core';
import { firestore } from 'firebase';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';
import { FirebaseDatabase } from '@firebase/database-types';

@Component({
  selector: 'lsl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // Zoom level
    zoom = 10;

    markerName: string;
    // Map Position
    title: string = 'My map';
    lat: number = 54.8985207;
    lng: number = 23.90359650000005;

    // Marker
    markers: marker[] = [

        {
            name: 'asd',
            lat: 54.8985207,
            lng: 23.90359650000005,
            draggable: false
        }
    ];

    constructor() {

    }

    mapClicked($event: any) {
        let newMarker = {
            name: this.markerName,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        }
        if (newMarker.name != null) {
            this.markers.push(newMarker);
        } else {
            console.log('error');
        }
    }



    clickedMarker(marker: marker, index: number) {
        console.log('Clicked Marker:' + marker.name + 'at index' + index);

    }
    addMarker($event: any) {

        let newMarker = {
            name: this.markerName,
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);

    }
}
interface marker {
    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;
}
