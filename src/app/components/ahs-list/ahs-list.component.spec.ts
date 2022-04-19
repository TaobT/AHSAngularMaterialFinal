import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhsListComponent } from './ahs-list.component';

describe('AhsListComponent', () => {
  let component: AhsListComponent;
  let fixture: ComponentFixture<AhsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AhsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AhsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
