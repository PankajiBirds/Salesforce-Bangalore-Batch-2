import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class CreateContactExampleLDS extends LightningElement {

    handleSave() {
        var data = this.template.querySelectorAll(".forInput");
        
        var fields = {
            Name : data[0].value,
            Phone : data[1].value,
            Email__c : data[2].value
        }

        console.log(fields);

        createRecord({apiName : 'Account', fields}).then(result => {
            console.log("** ", result.id);
        }).catch(error => {
            console.log("%% ", error);
        })
    }

}