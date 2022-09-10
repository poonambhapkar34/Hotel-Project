import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersuccesComponent } from './usersucces.component';

describe('UsersuccesComponent', () => {
  let component: UsersuccesComponent;
  let fixture: ComponentFixture<UsersuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
