import { Component, OnInit } from '@angular/core';
import { Sneaker } from '../Sneaker';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.css']
})
export class SneakerComponent implements OnInit {

  sneaker : Sneaker = {
    name: "Air Jordan 4 Bred",
    price: 2300.00,
    size: 9.5
  }


  constructor() { }

  ngOnInit(): void {
  }

}
