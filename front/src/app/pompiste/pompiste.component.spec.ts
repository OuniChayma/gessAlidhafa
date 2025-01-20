import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PompisteComponent } from './pompiste.component';

describe('PompisteComponent', () => {
  let component: PompisteComponent;
  let fixture: ComponentFixture<PompisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PompisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PompisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
