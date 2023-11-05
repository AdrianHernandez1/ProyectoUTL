import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyegresadoComponent } from './soyegresado.component';

describe('SoyegresadoComponent', () => {
  let component: SoyegresadoComponent;
  let fixture: ComponentFixture<SoyegresadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyegresadoComponent]
    });
    fixture = TestBed.createComponent(SoyegresadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
