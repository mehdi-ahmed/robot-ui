import { Component, OnInit } from '@angular/core';
import { RobotPart } from '../../shared/model/robot-part.model';
import { RobotPartService } from '../../shared/services/robot-part.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot-parts-form',
  templateUrl: './robot-parts-form.component.html',
  styleUrls: ['./robot-parts-form.component.css']
})
export class RobotPartsFormComponent implements OnInit {

  private robotPart: RobotPart;
  private submitted = false;
  constructor(private _robotService: RobotPartService, private _router: Router) { }

  ngOnInit() {
    this.robotPart = this._robotService.getter();
  }

  onSubmit() {
    console.log('Inside submitForm');
    if (this.robotPart.id === undefined) {
      this._robotService.createRobotPart(this.robotPart).subscribe();
      this._router.navigate(['/']);
      
    } else {
      this._robotService.updateRobotPart(this.robotPart).subscribe();
      this._router.navigate(['/']);
    }
    this.submitted = true;
  }

}
