import { TestBed, inject } from '@angular/core/testing';

import { RobotPartService } from './robot-part.service';

describe('RobotPartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotPartService]
    });
  });

  it('should be created', inject([RobotPartService], (service: RobotPartService) => {
    expect(service).toBeTruthy();
  }));
});
