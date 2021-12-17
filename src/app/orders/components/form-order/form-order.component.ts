import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public states = Object.values(StateOrder);
  public errorMsg = false;
  private valid!: boolean;
  public clients$: Subject<Client[]>;
  private sub!: Subscription;
  @Input() init!: Order;
  @Output() submited: EventEmitter<{ order: Order; client: Client }> =
    new EventEmitter<{ order: Order; client: Client }>();
  constructor(private fb: FormBuilder, private clientsService: ClientsService) {
    this.init = new Order();
    this.clients$ = this.clientsService.collection;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      customerId: [this.init.customerId],
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
      this.clientsService.refreshCollection();
      this.sub = this.clients$.subscribe((clients) => {
        clients.forEach((client) => {
          if (this.form.controls['customerCompany'].value === client.company) {
            this.submited.emit({ order: this.form.value, client: client });
          }
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
