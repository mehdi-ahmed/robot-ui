import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRobotsPartsComponent } from './list-robots-parts.component';

describe('ListRobotsPartsComponent', () => {
  let component: ListRobotsPartsComponent;
  let fixture: ComponentFixture<ListRobotsPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRobotsPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRobotsPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
