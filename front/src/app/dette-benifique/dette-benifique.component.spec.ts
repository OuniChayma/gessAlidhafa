import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetteBenifiqueComponent } from './dette-benifique.component';

describe('DetteBenifiqueComponent', () => {
  let component: DetteBenifiqueComponent;
  let fixture: ComponentFixture<DetteBenifiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetteBenifiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetteBenifiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
