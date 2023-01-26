import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppoitnmentComponent } from './new-appoitnment.component';

describe('NewAppoitnmentComponent', () => {
  let component: NewAppoitnmentComponent;
  let fixture: ComponentFixture<NewAppoitnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAppoitnmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAppoitnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
