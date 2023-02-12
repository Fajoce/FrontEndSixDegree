import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleUsuariosComponent } from './detalle-usuarios.component';

describe('DetalleUsuariosComponent', () => {
  let component: DetalleUsuariosComponent;
  let fixture: ComponentFixture<DetalleUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
