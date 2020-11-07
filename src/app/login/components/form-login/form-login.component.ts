import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {

    this.formLogin = this.fb.group({
      usuario : ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(3)]]
    });

  }

  ngOnInit() {

  }

  onEnter() {

    if (this.formLogin.controls['usuario'].value === 'mla@gmail.com'
    && this.formLogin.controls['clave'].value === '1234') {
      this.router.navigate(['/pages/home']);
    } else {
      alert('Usuario malo, verificar');
    }

  }

}
