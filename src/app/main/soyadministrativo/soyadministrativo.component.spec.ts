import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyadministrativoComponent } from './soyadministrativo.component';

describe('SoyadministrativoComponent', () => {
  let component: SoyadministrativoComponent;
  let fixture: ComponentFixture<SoyadministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyadministrativoComponent]
    });
    fixture = TestBed.createComponent(SoyadministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
