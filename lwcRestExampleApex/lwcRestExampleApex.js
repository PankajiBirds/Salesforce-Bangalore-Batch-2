import { LightningElement } from 'lwc';
import getAllUsers from '@salesforce/apex/RestExampleLWC.getAllUsers';

export default class LwcRestExampleApex extends LightningElement {

    userList;

    connectedCallback() {
        getAllUsers().then(result => {
            var users = JSON.parse(JSON.stringify(result));
            this.userList = JSON.parse(users).data;
            console.log(this.userList);
        }).catch(error => {
            console.log('@@ : ', error);
        })
    }

}