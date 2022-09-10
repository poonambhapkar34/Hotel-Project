import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlandComponent } from './adminland.component';

describe('AdminlandComponent', () => {
  let component: AdminlandComponent;
  let fixture: ComponentFixture<AdminlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
