import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Datamodel } from '../intercefe/DataModel';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  quantity: string = "";
  customerOrder: Datamodel[];
  dealerOrder: Datamodel[];
  TODAY_STR = new Date().toISOString().slice(0, 10);
  totalQuantity: number = 0
  saleType: number
  discount: number
  totalCost: number = 0
  ProductData = [
    { id: '1', name: 'product-1', price: 1002.00, Stock: 50 },
    { id: '2', name: 'product-2', price: 500.00, Stock: 40 },
    { id: '3', name: 'product-3', price: 700.00, Stock: 30 },
    { id: '4', name: 'product-4', price: 102.00, Stock: 20 },
    { id: '5', name: 'product-5', price: 530.00, Stock: 30 },
    { id: '6', name: 'product-6', price: 720.00, Stock: 20 },
  ];
  constructor(public router: Router) {
    this.customerOrder = [];
    this.dealerOrder = [];
  }
  ngOnInit(): void {

  }
  openPage(routeName: string) {

    this.router.navigate([`/${routeName}`]);
  }

  addProductToCustomer(data: any) {
    this.customerOrder = this.addproduct(data, this.customerOrder);
  }
  addproduct(data: any, dataArray: Datamodel[]) {
    let index = dataArray.findIndex(dataValue => dataValue.id === data.id);
    if (index == -1) {
      data.quantity = 0;
      dataArray.push(data);
    }
    else {
      alert("Product Already Exist!!");
    }
    return dataArray;

  }
  addProductToDealer(data: any) {
    this.dealerOrder = this.addproduct(data, this.dealerOrder);
  }
  removeProductToCustomer(data: any) {
    let index = this.customerOrder.findIndex(customerData => customerData.id === data.id);
    this.customerOrder.splice(index, 1);
    this.costCheck(this.customerOrder);
  }
  removeProductToDealer(data: any) {
    let index = this.dealerOrder.findIndex(dealerData => dealerData.id === data.id);
    this.dealerOrder.splice(index, 1);
    this.costCheck(this.dealerOrder);
  }
  onChangeOptionCustomer(data: any, event: any) {
    this.costCalculation(data, event, this.customerOrder);

  }
  costCalculation(data: any, event: any, dataArray: Datamodel[]) {
    let index = dataArray.findIndex(dataValue => dataValue.id === data.id);
    dataArray[index].quantity = parseFloat(event.target.value);
    this.costCheck(dataArray);

  }

  costCheck(dataArray) {
    this.totalCost = 0;
    this.totalQuantity = 0;
    dataArray.forEach(element => {
      this.totalCost += element.quantity * element.price;
      this.totalQuantity += element.quantity
    });
  }

  onChangeOptionDealer(data: any, event: any) {
    this.costCalculation(data, event, this.dealerOrder);

  }




}
