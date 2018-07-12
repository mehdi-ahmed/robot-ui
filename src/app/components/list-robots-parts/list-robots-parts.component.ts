import { Component, OnInit } from '@angular/core';
import { RobotPart } from '../../shared/model/robot-part.model';
import { RobotPartService } from '../../shared/services/robot-part.service';

@Component({
  selector: 'app-list-robots-parts',
  templateUrl: './list-robots-parts.component.html',
  styleUrls: ['./list-robots-parts.component.css']
})
export class ListRobotsPartsComponent implements OnInit {

  private robotParts: RobotPart[];

  constructor(private _robotService: RobotPartService) { }

  ngOnInit() {
    this._robotService.getAllRobotParts().subscribe((robotParts) => {
      console.log(robotParts);
      this.robotParts = robotParts;
    }, (error) => {
      console.log(error);
    })

  }
}
