import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifiquePIComponent } from './benifique-pi.component';

describe('BenifiquePIComponent', () => {
  let component: BenifiquePIComponent;
  let fixture: ComponentFixture<BenifiquePIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenifiquePIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenifiquePIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
