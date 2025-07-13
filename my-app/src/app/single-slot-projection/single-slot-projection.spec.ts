import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotProjection } from './single-slot-projection';

describe('SingleSlotProjection', () => {
  let component: SingleSlotProjection;
  let fixture: ComponentFixture<SingleSlotProjection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSlotProjection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSlotProjection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
