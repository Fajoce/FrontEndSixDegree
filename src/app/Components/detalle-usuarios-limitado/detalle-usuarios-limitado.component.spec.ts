import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuariosLimitadoComponent } from './detalle-usuarios-limitado.component';

describe('DetalleUsuariosLimitadoComponent', () => {
  let component: DetalleUsuariosLimitadoComponent;
  let fixture: ComponentFixture<DetalleUsuariosLimitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUsuariosLimitadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUsuariosLimitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
