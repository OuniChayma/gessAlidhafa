import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituationfinanciereComponent } from './situationfinanciere.component';

describe('SituationfinanciereComponent', () => {
  let component: SituationfinanciereComponent;
  let fixture: ComponentFixture<SituationfinanciereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SituationfinanciereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SituationfinanciereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
