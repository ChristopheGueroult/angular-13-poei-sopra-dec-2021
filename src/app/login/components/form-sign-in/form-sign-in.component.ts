import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss'],
})
export class FormSignInComponent implements OnInit {
  public form!: FormGroup;
  public typeInput = 'password';
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public register(): void {
    const username = this.form.controls['userName'].value;
    const password = this.form.controls['password'].value;
    this.authService.signIn(username, password).subscribe((data) => {
      console.log(data);
    });
  }

  public toggleType(): void {
    if (this.typeInput === 'password') {
      this.typeInput = 'text';
    } else {
      this.typeInput = 'password';
    }
  }
}
