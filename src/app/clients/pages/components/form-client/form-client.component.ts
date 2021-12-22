import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  public form!: FormGroup;
  public states = Object.values(StateClient);
  public errorMsg = false;
  private valid!: boolean;
  @Input() init!: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter<Client>();
  constructor(private fb: FormBuilder, private clientsService: ClientsService) {
    this.init = new Client();
  }

  ngOnInit(): void {
    console.log(this.init);

    this.form = this.fb.group({
      active: [this.init.active],
      company: [this.init.company, Validators.required],
      firstname: [this.init.firstname, Validators.required],
      id: [this.init.id],
      lastname: [this.init.lastname, Validators.required],
      mail: [this.init.mail, Validators.required],
      mobile: [this.init.mobile, Validators.required],
      notes: [this.init.notes],
      orders: [this.init.orders],
      phone: [this.init.phone, Validators.required],
    });
  }
  public register(): void {
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
      // console.log(this.form.value);

      this.submited.emit(this.form.value);
    }
  }
}
