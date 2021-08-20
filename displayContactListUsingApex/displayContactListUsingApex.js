import { LightningElement, wire } from 'lwc';
import contactList from '@salesforce/apex/ContactControllerLWC.contactList';

export default class DisplayContactListUsingApex extends LightningElement {

    @wire(contactList) allContactData;

}