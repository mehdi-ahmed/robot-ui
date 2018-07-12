import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotPartsFormComponent } from './robot-parts-form.component';

describe('RobotPartsFormComponent', () => {
  let component: RobotPartsFormComponent;
  let fixture: ComponentFixture<RobotPartsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotPartsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotPartsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
