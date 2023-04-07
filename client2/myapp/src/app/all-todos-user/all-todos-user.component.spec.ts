import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTodosUserComponent } from './all-todos-user.component';

describe('AllTodosUserComponent', () => {
  let component: AllTodosUserComponent;
  let fixture: ComponentFixture<AllTodosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTodosUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTodosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
