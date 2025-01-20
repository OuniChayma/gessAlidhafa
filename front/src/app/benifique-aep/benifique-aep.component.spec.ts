import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenifiqueAEPComponent } from './benifique-aep.component';

describe('BenifiqueAEPComponent', () => {
  let component: BenifiqueAEPComponent;
  let fixture: ComponentFixture<BenifiqueAEPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenifiqueAEPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenifiqueAEPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
