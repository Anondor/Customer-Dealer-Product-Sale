import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-dealer',
  templateUrl: './dealer.component.html',
  styleUrls: ['./dealer.component.css']
})
export class DealerComponent extends BaseComponent implements OnInit {

  constructor(public override router:Router){
    super(router);
  }
  override ngOnInit(): void {

  }

}

