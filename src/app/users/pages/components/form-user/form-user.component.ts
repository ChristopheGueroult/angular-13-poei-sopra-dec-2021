import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
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
  public states = StateUser;
  public errorMsg = false;
  private valid!: boolean;
  @Input() init!: User;
  @Output() submited: EventEmitter<User> = new EventEmitter<User>();
  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.init = new User();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      mail: [this.init.mail, Validators.required],
      grants: [this.init.grants, Validators.required],
      username: [this.init.username, Validators.required],
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
      this.submited.emit(this.form.value);
    }
  }
}
