import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoyempresarioComponent } from './soyempresario.component';

describe('SoyempresarioComponent', () => {
  let component: SoyempresarioComponent;
  let fixture: ComponentFixture<SoyempresarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoyempresarioComponent]
    });
    fixture = TestBed.createComponent(SoyempresarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
