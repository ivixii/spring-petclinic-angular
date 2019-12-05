import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsListComponent } from './oferts-list.component';

describe('OfertsListComponent', () => {
  let component: OfertsListComponent;
  let fixture: ComponentFixture<OfertsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
