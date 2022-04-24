import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  public form!: FormGroup;
  public states = Object.values(StateUser);
  public errorMsg = false;
  private valid!: boolean;
  @Input() init!: User;
  @Input() edition!: boolean;
  @Output() submited: EventEmitter<User> = new EventEmitter<User>();
  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.init = new User();
  }

  ngOnInit(): void {
    console.log(this.init);

    this.form = this.fb.group({
      id: [this.init.id],
      email: [this.init.email, Validators.required],
      grants: [this.init.grants, Validators.required],
      firstname: [this.init.firstname, Validators.required],
      lastname: [this.init.lastname, Validators.required],
      password: ['', Validators.required],
    });
  }
  public register(): void {
    // console.log(this.form.value);
    if (this.edition) {
      this.form.removeControl('password');
      // console.log(this.form.value);
    }
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
