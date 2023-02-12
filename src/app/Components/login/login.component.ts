import { ExpressionType } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;
  
  @Output() opcion: EventEmitter<string> = new EventEmitter();
 
  loginForm = new FormGroup({
    userName: new FormControl("", [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(50)]),
    password: new FormControl("", [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20)])
  });

  isuservalid!: boolean;

  constructor(private router: Router, private userservice: UsuarioService) { }
  get User(): FormControl {
    return this.loginForm.get('userName') as FormControl
  }

  get Pass(): FormControl {
    return this.loginForm.get('password') as FormControl
  }
  enviar() {
     this.opcion.emit('Log In');
  }
  login() {
    this.userservice.loginUser([this.loginForm.value.userName,
    this.loginForm.value.password])
      .subscribe(res => {
        if (res == 'Failure') {
          this.isuservalid = false;

          alert('Invalid User');
        }
        else if (res == 'Success') {
          this.isuservalid = true;
          alert('Welcome' + this.loginForm.value.userName);
          this.router.navigate(['/AddOrders']);
        }
        else {
          this.isuservalid = true;
          this.enviar();
          alert('Welcome Admin ' + this.loginForm.value.userName);
          this.router.navigate(['/Usuarios']);
        }
        // this.loginForm.value.user = localStorage.setItem();
        console.log(this.loginForm.value.userName)
      })


    console.log(this.loginForm);

  }
}
