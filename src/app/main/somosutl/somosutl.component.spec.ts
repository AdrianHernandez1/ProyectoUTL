import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomosutlComponent } from './somosutl.component';

describe('SomosutlComponent', () => {
  let component: SomosutlComponent;
  let fixture: ComponentFixture<SomosutlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomosutlComponent]
    });
    fixture = TestBed.createComponent(SomosutlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
