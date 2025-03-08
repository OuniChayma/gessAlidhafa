import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpanneComponent } from './ajoutpanne.component';

describe('AjoutpanneComponent', () => {
  let component: AjoutpanneComponent;
  let fixture: ComponentFixture<AjoutpanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutpanneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutpanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
