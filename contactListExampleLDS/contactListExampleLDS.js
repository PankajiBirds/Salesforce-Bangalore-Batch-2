import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';

export default class ContactListExampleLDS extends LightningElement {

    allContactList;

    // @wire(getListUi , {
    //     objectApiName : 'Contact',
    //     listViewApiName : 'AllContacts'
    // }) contactList({error, data}){
    //     if(data) {
    //         console.log("@@ ",data);
    //         this.allContactList = data.records.records;            
    //     } else {
    //         console.log("## ", error);
    //     }
    // }

    // 00B5g00000OPHq2EAH

    @wire(getListUi , {
        listViewId : '00B5g00000OPHq2EAH'
    }) contactList({error, data}){
        if(data) {
            console.log("@@ ",data);
            this.allContactList = data.records.records;            
        } else {
            console.log("## ", error);
        }
    }

}