import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportsituationComponent } from './rapportsituation.component';

describe('RapportsituationComponent', () => {
  let component: RapportsituationComponent;
  let fixture: ComponentFixture<RapportsituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RapportsituationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportsituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
