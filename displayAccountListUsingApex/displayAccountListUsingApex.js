import { LightningElement, wire } from 'lwc';
import accountList from '@salesforce/apex/AccountControllerLWC.accountList';

export default class DisplayAccountListUsingApex extends LightningElement {

    allAccountList;

    @wire (accountList) getAccountList({error, data}) {
        if(data) {
            console.log("@@ ", data);
            this.allAccountList = data;
        } else {
            console.log("!! ", error);
        }
    }
    
}