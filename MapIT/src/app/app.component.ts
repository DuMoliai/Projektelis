import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/observable';
import { Marker } from '@agm/core/services/google-maps-types';
declare var firebase: any;


@Component({
  selector: 'lsl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // Zoom level
    zoom = 10;

    PagesMarker: Observable<any[]>;


    markerName: string;
    // Map Position
    title = 'My map';
    lat = 54.8985207;
    lng = 23.90359650000005;

    // Marker
    markers: marker[];
    itemsRef: AngularFireList<marker>;
    items: Observable<marker[]>;

    constructor(private db: AngularFireDatabase) {
        this.itemsRef = db.list('Markers');
        this.items = this.itemsRef.valueChanges();
        this.getItems().subscribe(items => {
           // console.log(items);
           this.markers = items;
        });
    }
    getItems() {
        return this.items;
    }

    ngOnInit() {

    }


    mapClicked($event: any) {
        const newMarker = {
            name: this.markerName,
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
