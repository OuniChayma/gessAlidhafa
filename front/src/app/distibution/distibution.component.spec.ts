import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistibutionComponent } from './distibution.component';

describe('DistibutionComponent', () => {
  let component: DistibutionComponent;
  let fixture: ComponentFixture<DistibutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistibutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistibutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
