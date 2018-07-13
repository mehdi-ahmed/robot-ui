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
  constructor(private _robotService: RobotPartService, private _router: Router) { }

  ngOnInit() {
    this.refreshOrLoad();
  } 
  
  public refreshOrLoad() {
    this._robotService.getAllRobotParts()
      .subscribe(data => {
        this.robotParts = data;
      });
  }
  
  public refresh() {
    this.refreshOrLoad();
  }


  public add(robotPart) {
    robotPart = new RobotPart();
    this._robotService.setter(robotPart);
    this._router.navigate(['/doStuff']);
  }

  public update(robotPart) {
    this._robotService.setter(robotPart);
    this._router.navigate(['/doStuff']);
  }

  public delete(robotPart) {
    this._robotService.deleteRobotPart(robotPart.id).subscribe();
    this.robotParts.splice(this.robotParts.indexOf(robotPart), 1);
    this._router.navigate(['/']);
  }

}
