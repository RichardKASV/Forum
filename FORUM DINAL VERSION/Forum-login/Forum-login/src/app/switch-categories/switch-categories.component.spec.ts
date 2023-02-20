import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCategoriesComponent } from './switch-categories.component';

describe('SwitchCategoriesComponent', () => {
  let component: SwitchCategoriesComponent;
  let fixture: ComponentFixture<SwitchCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
