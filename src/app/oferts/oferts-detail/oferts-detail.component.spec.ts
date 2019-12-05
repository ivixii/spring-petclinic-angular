import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsDetailComponent } from './oferts-detail.component';

describe('OfertsDetailComponent', () => {
  let component: OfertsDetailComponent;
  let fixture: ComponentFixture<OfertsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
