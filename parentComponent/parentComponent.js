import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    id;
    employeeName;
    salary;

    handleSimpleEvent(data) {
        console.log('parent executed');
        console.log(data);
        console.log('@@' , JSON.stringify(data));
        this.id = data.detail.id;
        this.employeeName = data.detail.employeeName;
        this.salary = data.detail.salary;
    }

}