import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingCategoryComponent } from './programming-category.component';

describe('ProgrammingCategoryComponent', () => {
  let component: ProgrammingCategoryComponent;
  let fixture: ComponentFixture<ProgrammingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
