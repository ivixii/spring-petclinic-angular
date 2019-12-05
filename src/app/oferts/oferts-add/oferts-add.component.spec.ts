import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsAddComponent } from './oferts-add.component';

describe('OfertsAddComponent', () => {
  let component: OfertsAddComponent;
  let fixture: ComponentFixture<OfertsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
