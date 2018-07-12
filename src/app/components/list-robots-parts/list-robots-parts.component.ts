import { Component, OnInit } from '@angular/core';
import { RobotPart } from '../../shared/model/robot-part.model';
import { RobotPartService } from '../../shared/services/robot-part.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-robots-parts',
  templateUrl: './list-robots-parts.component.html',
  styleUrls: ['./list-robots-parts.component.css']
})
export class ListRobotsPartsComponent implements OnInit {

  private robotParts: RobotPart[];
  constructor(private _robotService: RobotPartService:, private _router: Router) { }

  ngOnInit() {
    this.loadOrRefreshTable();
  }


  public loadOrRefreshTable() {
    this._robotService.getAllRobotParts().subscribe((robotParts) => {
      console.log(robotParts);
      this.robotParts = robotParts;
    }, (error) => {
      console.log(error);
    });
  }

  add(robotPart) {
    let robotPart = new RobotPart();
    this._robotService.setter(robotPart);
    this._router.navigate(['/doStuff']);
  }

  update(robotPart) {
    this._robotService.setter(robotPart);
    this._router.navigate(['/doStuff']);
  }

  delete(robotPart) {
    this._robotService.deleteRobotPart(robotPart.id).subscribe((data => {
      this.robotParts.splice(this.robotParts.indexOf(robotPart), 1);
      this.loadOrRefreshTable();
    }, (error) => {
      console.log('error', error;)
    });
}
}
