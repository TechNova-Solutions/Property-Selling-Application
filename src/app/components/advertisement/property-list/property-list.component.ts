import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": "Rs.12000",
      "Rent": "Rs.10000"
    },
    {
      "Id": 2,
      "Name": "Tata House",
      "Type": "House",
      "Price": "Rs.12000",
    },
    {
      "Id": 3,
      "Name": "Ambani House",
      "Type": "House",
      "Price": "Rs.12000",
    },
    {
      "Id": 4,
      "Name": "Birla House",
      "Type": "House",
      "Price": "Rs.12000",
    },
    {
      "Id": 5,
      "Name": "Tata House",
      "Type": "House",
      "Price": "Rs.12000",
    },
    {
      "Id": 6,
      "Name": "Ambani House",
      "Type": "House",
      "Price": "Rs.12000",
    }
  ];
}
