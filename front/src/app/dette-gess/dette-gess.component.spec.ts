import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetteGessComponent } from './dette-gess.component';

describe('DetteGessComponent', () => {
  let component: DetteGessComponent;
  let fixture: ComponentFixture<DetteGessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetteGessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetteGessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
