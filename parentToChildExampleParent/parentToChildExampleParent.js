import { LightningElement } from 'lwc';

export default class ParentToChildExampleParent extends LightningElement {
    name = "Kavita";
    salary = "10,000";

    handleSend() {
        var data = this.template.querySelectorAll(".forInput");
        var employeeData = {
            id : data[0].value,
            name : data[1].value,
            salary : data[2].value
        };

        this.template.querySelector(".child").getValueFromParent(employeeData);
    }
}