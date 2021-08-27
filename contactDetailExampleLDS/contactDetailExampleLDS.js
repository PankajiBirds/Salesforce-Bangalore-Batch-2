import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class ContactDetailExampleLDS extends LightningElement {

    contactDetail = {};
    // phone;
    @wire(getRecord, {
        recordId : '0035g00000Ah8bpAAB',
        fields : ['Contact.FirstName','Contact.LastName','Contact.Phone']
    }) contact({error, data}) {
        if(data) {
            console.log("!! ", data);
            this.contactDetail = {
                firstName : data.fields.FirstName.value,
                lastName : data.fields.LastName.value,
                phone : data.fields.Phone.value
            }
            //  this.contactDetail.phone = data.fields.Phone.value;
            console.log(this.contactDetail);
        } else {
            console.log("!# ", error);
        }
    }

}