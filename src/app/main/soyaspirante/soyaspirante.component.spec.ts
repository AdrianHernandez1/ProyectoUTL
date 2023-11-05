import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyaspiranteComponent } from './soyaspirante.component';

describe('SoyaspiranteComponent', () => {
  let component: SoyaspiranteComponent;
  let fixture: ComponentFixture<SoyaspiranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyaspiranteComponent]
    });
    fixture = TestBed.createComponent(SoyaspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
