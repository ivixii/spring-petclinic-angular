import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsEditComponent } from './oferts-edit.component';

describe('OfertsEditComponent', () => {
  let component: OfertsEditComponent;
  let fixture: ComponentFixture<OfertsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
