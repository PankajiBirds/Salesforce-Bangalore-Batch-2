import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {

    handleSendValue() {
        var data = this.template.querySelectorAll(".forInput");

        var employeeData = {
            id : data[0].value,
            employeeName : data[1].value,
            salary : data[2].value,
        }
        console.log('## ', employeeData);
        var simpleEventSource = CustomEvent('simpleevent',{detail : employeeData})
        this.dispatchEvent(simpleEventSource);
        console.log('!! executed');
    }

}