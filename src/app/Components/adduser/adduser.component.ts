import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink,Route, Router } from '@angular/router';
import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/service/usuario.service';

interface Types {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  forms!: FormGroup
  id!:number;
  titulo:string = 'Add Users';

  types: Types[] = [
    {value: 1, viewValue: 'Adm'},
    {value: 2, viewValue: 'Limitado'},
    {value: 3, viewValue: 'SuperAdm'},
  ];

  constructor(private fg: FormBuilder, private userservice:
    UsuarioService,
    private activeRoute: ActivatedRoute,
    private router: Router){
      this.forms = this.fg.group({
        userName: ['', Validators.required],
        userLastName : ['', Validators.required],
        typeOfUserId:[0, Validators.required],
        userAdress: [''],
        userTelephone: [''],
        userEmail:[''],
        password:[]
    });
  this.id = Number(this.activeRoute.snapshot.paramMap.get('id'));

  }
  ngOnInit(){
    if(this.id != 0){
      this.titulo = 'Edit Users';
      this.getUsers(this.id);
    }
  }

  getUsers(id:number){
    this.userservice.getUsersById(id).subscribe(data=>{
    this.forms.patchValue({
      userName: data.userName,
      userLastName: data.userLastName,
      typeOfUserId: data.typeOfUserId,
      userAdress: data.userAdress,
      userTelephone: data.userTelephone,
      userEmail: data.userEmail,
      password:data.password
       })
    })
    }

    AddEditUser(){
      const user: Usuarios = {
        userName : this.forms.value.userName,
        userLastName : this.forms.value.userLastName,
        userAdress: this.forms.value.userAdress,
        typeOfUserId: this.forms.value.typeOfUserId,
        userTelephone: this.forms.value.userTelephone,
        userEmail: this.forms.value.userEmail,
        password: this.forms.value.password
      }
      if(this.id != 0){
        user.userId = this.id,
      this.EditUser(this.id,user)
      alert('usario editado exitosamente!')
      }
      else{
        this.AddUser(user);
        alert('usario creado exitosamente!')
      }
      }
      AddUser(user:Usuarios){
      this.userservice.addUsers(user).subscribe(data=>{
        console.log(data);
        this.router.navigate(['/Usuarios']);
      })
      }
      
      EditUser(id:number, user: Usuarios){
        this.userservice.updateUsers(id,user).subscribe(data=>{
          console.log(data);
          this.router.navigate(['/Usuarios']);  
        })
      }

}
