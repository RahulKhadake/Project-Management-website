import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMultipleComponent } from './single-multiple.component';

describe('SingleMultipleComponent', () => {
  let component: SingleMultipleComponent;
  let fixture: ComponentFixture<SingleMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
