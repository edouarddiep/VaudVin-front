// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { SnotifyModule } from 'ng-snotify';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  registerForm: FormGroup;
  isReady = false;
  submitted = false;
  email:string;


  constructor(private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router, private notify: SnotifyModule) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
    });
    this.isReady = true;
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }

  submit(){
    this.submitted = true;
    this.auth.sendPasswordResetLink(this.email).subscribe(
      data => this.handleResponse(data),
      error => console.log(error)
    );
  }

  handleResponse(res){
    console.log(res);
    this.email = null;
  }

}
