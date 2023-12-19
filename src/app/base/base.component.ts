import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datamodel } from '../intercefe/DataModel';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {


  constructor(public router: Router) { }
  ProductData = [
    { id: '1', name: 'product-1', price: 1002.00, Stock: 50 },
    { id: '2', name: 'product-2', price: 500.00, Stock: 40 },
    { id: '3', name: 'product-3', price: 700.00, Stock: 30 },
  ];
  ngOnInit(): void {
  }

  openPage(routename: string) {
    this.router.navigate([`/${routename}`]);
  }
  addProductToCustomer(data: any) {
    console.log("Customer Page");
    console.log(data);
    debugger
  }

  addProductToDealer(data: any) {
    console.log("Dealer Page")
    console.log(data);
    debugger
  }

}
