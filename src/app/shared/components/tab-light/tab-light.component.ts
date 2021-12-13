import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-light',
  templateUrl: './tab-light.component.html',
  styleUrls: ['./tab-light.component.scss'],
})
export class TabLightComponent implements OnInit {
  public headers!: string[];
  public collection!: any[];
  constructor() {}

  ngOnInit(): void {
    this.headers = [
      'Client',
      'Type',
      'Description',
      'Unit Price',
      'Nb Days',
      'Tva',
      'Total (excl. Taxes)',
      'Total (with Taxes)',
      'State',
    ];
    this.collection = [
      {
        id: 1,
        label: 'Formation Java',
        adrEt: 450,
        numberOfDays: 5,
        tva: 20,
        status: 'CONFIRMED',
        type: 'Forfait',
        notes: 'Test',
        customerId: 1,
      },
    ];
  }
}
