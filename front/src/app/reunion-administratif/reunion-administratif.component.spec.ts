import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReunionAdministratifComponent } from './reunion-administratif.component';

describe('ReunionAdministratifComponent', () => {
  let component: ReunionAdministratifComponent;
  let fixture: ComponentFixture<ReunionAdministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReunionAdministratifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReunionAdministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
