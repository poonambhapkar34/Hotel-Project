import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfaillComponent } from './adminfaill.component';

describe('AdminfaillComponent', () => {
  let component: AdminfaillComponent;
  let fixture: ComponentFixture<AdminfaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
