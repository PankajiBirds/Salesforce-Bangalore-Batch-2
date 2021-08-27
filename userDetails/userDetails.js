import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_ID from '@salesforce/user/Id';

export default class UserDetails extends LightningElement {

    currentUser = {};

    @wire(getRecord, {
        recordId : USER_ID,
        fields : ['User.FirstName','User.LastName','User.Email']
    }) userDetail({error, data}) {
        if(data) {
            console.log("^^ ", data);
            this.currentUser = {
                firstName : data.fields.FirstName.value,
                lastName : data.fields.LastName.value,
                email : data.fields.Email.value
            }
        } else {
            console.log("$$ ", error);
        }
    }

}