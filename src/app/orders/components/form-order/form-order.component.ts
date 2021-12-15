import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    address: this.fb.group({
      street: [''],
      city: ['Antibes'],
      state: [''],
      zip: [''],
    }),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.profileForm.valid); // false
    console.log(this.profileForm.controls['firstName'].valid); // false
  }
  onSubmit() {
    // si firstName contient au moins une lettre
    console.log(this.profileForm.valid); // true
    console.log(this.profileForm.controls['firstName'].valid); // true
  }
}
