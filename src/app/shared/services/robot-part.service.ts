import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { RobotPart } from '../model/robot-part.model';

import { map, scan, catchError, filter } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const ROBOT_API_URL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class RobotPartService {

  constructor(private http: HttpClient) { }

  public getAllRobotParts(): Observable<RobotPart[]> {
    console.log(`Fetching all RobotParts from ${ROBOT_API_URL}...`);

    return this.http
      .get(ROBOT_API_URL).pipe(
        map(response => {
          let robot: any = response;
          return robot.map((robot) => new RobotPart(robot));
        }),
        catchError(this.handleError)
      );
  }


  public createRobotPart(robotPart: RobotPart): Observable<RobotPart> {

    console.log(`Creating a Robot Part ${ROBOT_API_URL}/add...`);

    return this.http
      .post(ROBOT_API_URL + '/add', robotPart).pipe(
        map(response => {
          let robot: any = response;
          return robot.map((robot) => new RobotPart(robot));
        }),
        catchError(this.handleError)
      );
  }

  public updateRobotPart(robotPart: RobotPart): Observable<RobotPart> {
    return this.http
      .put(ROBOT_API_URL + '/update/' + robotPart.id, robotPart).pipe(
        map(response => {
          let robot: any = response;
          return robot.map((robot) => new RobotPart(robot));
        })
        , catchError(this.handleError)
      );
  }


  public deleteRobotPart(robotPartId: number): Observable<null> {
    return this.http
      .delete(ROBOT_API_URL + '/todos/' + robotPartId).pipe(
        map(response => null),
        catchError(this.handleError)
      );
  }


  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
