import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDataUserComponent } from './all-data-user.component';

describe('AllDataUserComponent', () => {
  let component: AllDataUserComponent;
  let fixture: ComponentFixture<AllDataUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDataUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
