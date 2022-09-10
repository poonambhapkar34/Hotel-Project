import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerlandComponent } from './ownerland.component';

describe('OwnerlandComponent', () => {
  let component: OwnerlandComponent;
  let fixture: ComponentFixture<OwnerlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerlandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
