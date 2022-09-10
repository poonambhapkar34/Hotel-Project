import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsuccesComponent } from './adminsucces.component';

describe('AdminsuccesComponent', () => {
  let component: AdminsuccesComponent;
  let fixture: ComponentFixture<AdminsuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
