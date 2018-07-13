import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RobotPart } from '../model/robot-part.model';

import { catchError, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const ROBOT_API_URL = environment.baseURL;

@Injectable()
export class RobotPartService {

  private robotPart: RobotPart = new RobotPart();
  private robotParts: RobotPart[];
  
  constructor(private http: HttpClient) {
  } 
  
  public getAllRobotParts() {
    return this.http.get<RobotPart[]>(ROBOT_API_URL);
  }

  public createRobotPart(robotPart: RobotPart){
    return this.http.post(ROBOT_API_URL + '/add', robotPart);
  }

  updateRobotPart(robotPart: RobotPart){
    return this.http.put(ROBOT_API_URL + '/update/' + robotPart.id, robotPart);
  }
  
  public deleteRobotPart(robotPartId: number): Observable<null> {
    return this.http
      .delete(ROBOT_API_URL + '/delete/' + robotPartId).pipe(
        map(response => null)
        , catchError(this.handleError)
      );
  }


  handleError(error: Response | any) {
    return Observable.throw(error);
  }

  setter(robotPart: RobotPart) {
    this.robotPart = robotPart
  }

 getter() {
    return this.robotPart;
  }
}

