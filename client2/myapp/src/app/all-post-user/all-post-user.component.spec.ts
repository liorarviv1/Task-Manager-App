import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPostUserComponent } from './all-post-user.component';

describe('AllPostUserComponent', () => {
  let component: AllPostUserComponent;
  let fixture: ComponentFixture<AllPostUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPostUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPostUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
