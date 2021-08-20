import { LightningElement,wire  } from 'lwc';
import accountDetail from '@salesforce/apex/AccountControllerLWC.accountDetail';

export default class DisplayAccountDetailUsingApex extends LightningElement {

    account = {};
    
    @wire (accountDetail, {accountId : '0015g00000NQqiBAAT'}) getAccountById({error, data}){
        if(data) {
            console.log("## ", data);
            this.account = data;
            console.log("account ", this.account.Name);
        } else {
            console.log("%% ", error);
        }
    }

}