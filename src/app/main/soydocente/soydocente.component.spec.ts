import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoydocenteComponent } from './soydocente.component';

describe('SoydocenteComponent', () => {
  let component: SoydocenteComponent;
  let fixture: ComponentFixture<SoydocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoydocenteComponent]
    });
    fixture = TestBed.createComponent(SoydocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
