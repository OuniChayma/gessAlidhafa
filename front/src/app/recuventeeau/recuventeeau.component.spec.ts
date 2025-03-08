import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuventeeauComponent } from './recuventeeau.component';

describe('RecuventeeauComponent', () => {
  let component: RecuventeeauComponent;
  let fixture: ComponentFixture<RecuventeeauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuventeeauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuventeeauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
