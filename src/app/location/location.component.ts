import { FullLocationData, Location } from './location.interface';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {

  readonly customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['PREV', 'NEXT'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };

  // this indicates how many pictures should
  // be displayed for each location;
  readonly IMGS_FOR_LOCATION = 5;
  readonly locationNames = [
    "Harrington",
    "Cornwall",
    "Southwell",
    "Mews",
    "Kensington",
    "Tourist",
    "Apartments"
  ];
  locations: Location[] = [];

  constructor(private http: HttpClient) { 
    this.initialiseLocations();
  }

  initialiseLocations() {
    const locations$ = this.http.get<FullLocationData[]>(environment.locationsRepository);

    locations$.subscribe(locationsData => {
      this.locationNames.forEach(locationName => {
        const fullLocation: Location = {
          imgs: locationsData.splice(0, this.IMGS_FOR_LOCATION)
                             .map(location => location.thumbnailUrl),
          name: locationName
        };
        this.locations.push(fullLocation);
      });
    });
  }

  scrollToElementWithId(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth", 
      block: "start", 
      inline: "nearest"}
    );
  }

}
