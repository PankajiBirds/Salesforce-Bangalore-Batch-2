import { api, LightningElement } from 'lwc';

export default class ParentToChildExampleChild extends LightningElement {
    @api
    employeeId;
    @api
    employeeName;
    @api
    salary;

    @api
    getValueFromParent(data) {
        // var employeeData = JSON.parse(JSON.stringify(data));

        this.employeeId = data.id;
        this.employeeName = data.name;
        this.salary = data.salary;

        // console.log(employeeData.id);
        // console.log(employeeData);
    }
}