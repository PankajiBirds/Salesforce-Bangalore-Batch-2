import { LightningElement} from 'lwc';
import createAccount from '@salesforce/apex/AccountControllerLWC.createAccount';
export default class CreateAccountUsingApex extends LightningElement {
    
    handleSaveAccount() {        
        var accountData = this.template.querySelectorAll(".forInput");                
        var account = {
            Name : accountData[0].value,
            Phone : accountData[1].value,
            Email__c : accountData[2].value
        }        

        createAccount({account : account}).then(result => {
            alert("Record Successfully Save" + result);
        }).catch(error => {
            console.log("!! ", error);
        });
    }

}