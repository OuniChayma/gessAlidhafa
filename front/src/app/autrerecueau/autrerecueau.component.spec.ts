import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutrerecueauComponent } from './autrerecueau.component';

describe('AutrerecueauComponent', () => {
  let component: AutrerecueauComponent;
  let fixture: ComponentFixture<AutrerecueauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutrerecueauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutrerecueauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
