import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditViewComponent } from './add-edit-view.component';

describe('AddEditViewComponent', () => {
  let component: AddEditViewComponent;
  let fixture: ComponentFixture<AddEditViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
