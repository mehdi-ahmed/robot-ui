import * as _ from 'lodash';

export class RobotPart {
    id:Number;
    name:string;
    serialNumber:string;
    manufacturer:string;
    weight:string;


    constructor(data?) {
        this.id = _.get(data, 'id', null);
        this.name = _.get(data, 'name', null);
        this.serialNumber = _.get(data, 'serialNumber', null);
        this.manufacturer = _.get(data, 'manufacturer', null);
        this.weight = _.get(data, 'weight', null);
        }
 }

