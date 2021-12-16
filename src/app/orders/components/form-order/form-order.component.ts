import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  public errorMsg = false;
  private valid!: boolean;
  @Input() init!: Order;
  constructor(private fb: FormBuilder) {
    this.init = new Order();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      adrEt: [this.init.adrEt, Validators.required],
      customerCompany: [this.init.customerCompany, Validators.required],
      id: [this.init.id],
      label: [this.init.label, Validators.required],
      notes: [this.init.notes],
      numberOfDays: [this.init.numberOfDays, Validators.required],
      status: [this.init.status],
      tva: [this.init.tva, Validators.required],
      type: [this.init.type, Validators.required],
    });
  }
  public onSubmit(): void {
    this.valid = true;
    for (const field in this.form.controls) {
      const control = this.form.get(field);
      // console.log(control?.valid);
      if (control?.invalid) {
        this.errorMsg = true;
        this.valid = false;
      }
    }
    if (this.valid) {
      console.log(this.form.value);
    }
  }
}
