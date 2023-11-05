import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyestudianteComponent } from './soyestudiante.component';

describe('SoyestudianteComponent', () => {
  let component: SoyestudianteComponent;
  let fixture: ComponentFixture<SoyestudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyestudianteComponent]
    });
    fixture = TestBed.createComponent(SoyestudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
