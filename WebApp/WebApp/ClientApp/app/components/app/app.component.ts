import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'My map';
    lat: number = 54.8985207;
    lng: number = 23.90359650000005;
}

