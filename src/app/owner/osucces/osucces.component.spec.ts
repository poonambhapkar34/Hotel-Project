import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsuccesComponent } from './osucces.component';

describe('OsuccesComponent', () => {
  let component: OsuccesComponent;
  let fixture: ComponentFixture<OsuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsuccesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OsuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
