import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDatosDeEntradaComponent } from './form-datos-de-entrada.component';

describe('FormDatosDeEntradaComponent', () => {
  let component: FormDatosDeEntradaComponent;
  let fixture: ComponentFixture<FormDatosDeEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDatosDeEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDatosDeEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
