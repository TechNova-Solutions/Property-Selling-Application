import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent {

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": "Rs.120000",
      "Rent": "Rs.10000",
      "ImageUrl": "/assets/img/property-1.jpeg"
    },
    {
      "Id": 2,
      "Name": "Bella House",
      "Type": "House",
      "Price": "Rs.220000",
      "Rent": "Rs.15000",
      "ImageUrl": "/assets/img/property-2.jpeg"
    },
    {
      "Id": 3,
      "Name": "Mary House",
      "Type": "House",
      "Price": "Rs.320000",
      "Rent": "Rs.20000",
      "ImageUrl": "/assets/img/property-3.jpg"
    },
    {
      "Id": 4,
      "Name": "Sonic House",
      "Type": "House",
      "Price": "Rs.120000",
      "Rent": "Rs.10000",
      "ImageUrl": "/assets/img/property-4.jpg"
    },
    {
      "Id": 5,
      "Name": "Majic Villa",
      "Type": "Villa",
      "Price": "Rs.220000",
      "Rent": "Rs.15000",
      "ImageUrl": "/assets/img/property-5.jpg"
    },
    {
      "Id": 6,
      "Name": "Macro Villa",
      "Type": "Villa",
      "Price": "Rs.320000",
      "Rent": "Rs.20000",
      "ImageUrl": "/assets/img/property-6.jpg"
    },
    {
      "Id": 7,
      "Name": "shirly House",
      "Type": "House",
      "Price": "Rs.120000",
      "Rent": "Rs.10000",
      "ImageUrl": "/assets/img/property-7.jpg"
    },
    {
      "Id": 8,
      "Name": "John House",
      "Type": "House",
      "Price": "Rs.220000",
      "Rent": "Rs.15000",
      "ImageUrl": "/assets/img/property-8.jpg"
    }
  ];
  contact(){}
  onDelete(){}
}
