import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfaillComponent } from './ofaill.component';

describe('OfaillComponent', () => {
  let component: OfaillComponent;
  let fixture: ComponentFixture<OfaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
