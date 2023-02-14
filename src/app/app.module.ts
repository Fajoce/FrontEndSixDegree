import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {NgxPrintModule} from 'ngx-print';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';



import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { AdduserComponent } from './Components/adduser/adduser.component';

import { LoginComponent } from './Components/login/login.component';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { DetalleUsuariosComponent } from './Components/detalle-usuarios/detalle-usuarios.component';
import { HomeComponent } from './Components/home/home.component';
import { DetalleUsuariosLimitadoComponent } from './Components/detalle-usuarios-limitado/detalle-usuarios-limitado.component';
import { UsuarioGuard } from './Gurads/usuario.guard';

const routes :Routes = [
  {path:'', redirectTo: 'Login', pathMatch: 'full'},
  {path:'Home', component: HomeComponent},
  {path: 'getUsuario/:id', component:DetalleUsuariosComponent},
  {path: 'getUsuarios/:name', component:DetalleUsuariosLimitadoComponent},  
  {path:'Usuarios', component: UsuariosComponent},
  {path:'AddUsers', component : AdduserComponent },
  {path:'editUser/:id', component : AdduserComponent},
  {path:'Login', component: LoginComponent},
  {path:'Menu', component: MenuComponent},
  {path:'**', redirectTo: 'Home', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,    
    MenuComponent,
    AdduserComponent,
    LoginComponent, 
    UsuariosComponent,
    DetalleUsuariosComponent,
    HomeComponent,
    DetalleUsuariosLimitadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPrintModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
